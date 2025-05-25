import { TextField, Button, Alert} from "@mui/material";
import TextFieldForm from "./TextFieldForm";
import { useState } from "react";
import {auth} from "../firebaseConfig"
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Register({ setLog }) {
  const [userForm, setUserForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const treatForm = async (e) => {
    e.preventDefault();
    console.log("formulario");
    console.log(userForm);

    if (userForm.password.length < 6) {
      return setError("Senha deve ter no mínimo 6 caracteres.");
    } 


    try {
 
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        userForm.email,
        userForm.password
      );
      console.log("User Registered:", userCredential.user);
      setUserForm({ email: "", password: "" });
      setError("");
      setMessage("Account Created!!!")
      //setLog(true); // muda para login
    } catch (error) {
      console.error("Erro ao registrar:", error.message);
      setError("Email Already Registered.");
    }
  };

  return (
    <form
      onSubmit={(e) => treatForm(e)}
      className="flex flex-col gap-5 border border-[2px] p-6 rounded-xl w-full max-w-sm min-w-[400px] mx-auto mt-10 shadow-md"
    >
      <h2 className="">Page Register</h2>
      <div className="flex flex-col">
        <TextFieldForm
          id={"email"}
          placeholder={"Email"}
          type={"email"}
          value={userForm.email}
          setUserForm={setUserForm}
        />
      </div>
      <div className="flex flex-col">
        <TextFieldForm
          id={"password"}
          placeholder={"Password"}
          type={"password"}
          value={userForm.password}
          setUserForm={setUserForm}
        />
        {error && <Alert severity="error">{error}</Alert>}
        {message && <Alert severity="success">{message}</Alert> }
      </div>
      <Button
        type="submit"
        variant="outlined"
        color="primary"
        style={{ fontWeight: 700 }}
      >
        Register
      </Button>
      <p
        onClick={() => setLog((x) => !x)}
        style={{ textAlign: "right", fontWeight: 300 }}
      >
        Login
      </p>
    </form>
  );
}

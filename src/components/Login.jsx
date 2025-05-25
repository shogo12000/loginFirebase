import { Alert, Button } from "@mui/material";
import TextFieldForm from "./TextFieldForm";
import { useState } from "react";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login({ setLog }) {
  const [userForm, setUserForm] = useState({ email: "", password: "" });
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();
  const treatForm = async (e) => {
    e.preventDefault(); 

    try {
      const userLogin = await signInWithEmailAndPassword(
        auth,
        userForm.email,
        userForm.password
      );

      console.log("User logged:", userLogin.user);
      navigate("/member");
    } catch (error) {
      console.error("Error Login!!!", error.message);
      setErrorMsg("Error Login!!!");
    }
  };

  return (
    <form
      onSubmit={(e) => treatForm(e)}
      className="flex flex-col gap-5 border border-[2px] p-6 rounded-xl w-full max-w-sm min-w-[400px] mx-auto mt-10 shadow-md"
    >
      <h2 className="">Page Login</h2>
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
        {errorMsg && <Alert severity="error">{errorMsg}</Alert>}
      </div>
      <Button
        type="submit"
        variant="outlined"
        color="primary"
        style={{ fontWeight: 700 }}
      >
        Login
      </Button>
      <p
        onClick={() => setLog((x) => !x)}
        style={{ textAlign: "right", fontWeight: 300 }}
      >
        Register
      </p>
    </form>
  );
}

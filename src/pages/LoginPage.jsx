import Login from "../components/Login";
import Register from "../components/Register";
import { useState } from "react";

export default function LoginPage() {
  const [login, setLogin] = useState(true);

  return (
    <>
        {login ? <Login setLog={setLogin} /> : <Register setLog={setLogin} />}
    </>
  );
}

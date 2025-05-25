import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
 import {auth} from "../firebaseConfig"
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log("Logado");
        console.log(currentUser)
        setUser(currentUser);
      } else {
        console.log("Não logado");
        setUser(null);
      }
      setLoading(false);
    });

    // cleanup
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Carregando...</div>; // ou um spinner
  }

  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
}
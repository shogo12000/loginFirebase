import { Button } from "@mui/material";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Menu() {
  const navigate = useNavigate();

  const btnLogout = () => {
    signOut(auth)
      .then(() => {  
        navigate("/");
      })
      .catch((error) => {
        console.log("Signout Error!")
      });
    
  };
  return (
    <Button variant="outlined" onClick={btnLogout}>
      Logout
    </Button>
  );
}

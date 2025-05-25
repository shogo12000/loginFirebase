import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MemberPage from "./pages/MemberPage";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <>
     
      <Router>
        <Routes> 
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/member"
            element={
              <PrivateRoute>
                <MemberPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;

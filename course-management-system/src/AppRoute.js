import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import LoginActivity from "./pages/LoginActivity";
import Welcome from "./pages/Welcome";

function AppRoutes() {
  return (
    <>
        <Router> 
            <Routes>
                <Route path="/welcome" element={<Welcome />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login-activity" element={<LoginActivity />} />
            </Routes>
        </Router>
    </>
  );
}

export default AppRoutes;

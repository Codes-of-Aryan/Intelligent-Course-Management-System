import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import WeeklySchedule from "./pages/WeeklySchedule";
// import Calendar from "./pages/Calendar";
import Home from "./pages/Home";
import LoginActivity from "./pages/LoginActivity";
import Welcome from "./pages/Welcome";
import MyCourses from "./pages/MyCourses";

function AppRoutes() {
  return (
    <>
        <Router> 
            <Routes>
                <Route path="/welcome" element={<Welcome />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login-activity" element={<LoginActivity />} />
                <Route path="/weekly-schedule" element={<WeeklySchedule />} />
                <Route path="/my-courses" element={<MyCourses />} />
            </Routes>
        </Router>
    </>
  );
}

export default AppRoutes;

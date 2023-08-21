import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/Login/Login";
import StudentDashboard from "./pages/studentdashboard/StudentDashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Attendence from "./pages/Attendence/Attendence";
import Assignments from "./pages/Assignments/Assignments";
import Schedule from "./pages/Schedule/Schedule";
import Notification from "./pages/Notification/Notification";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/attendence" element={<Attendence />} />
          <Route path="/assignments" element={<Assignments />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/notification" element={<Notification />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

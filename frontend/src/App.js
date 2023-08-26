import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/Login/Login";
import StudentDashboard from "./pages/studentdashboard/StudentDashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Attendence from "./pages/Attendence/Attendence";
import Assignments from "./pages/Assignments/Assignments";
import Schedule from "./pages/Schedule/Schedule";
import Notification from "./pages/Notification/Notification";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import RegisterStudent from "./pages/RegisterStudent/RegisterStudent";
import GenerateAttendenceReport from "./pages/GenerateAttendenceReport/GenerateAttendenceReport";
import CreateSchedule from "./pages/CreateSchedule/CreateSchedule";
import PushNotification from "./pages/PushNotification/PushNotification";
import GenerateStudentReport from "./pages/GenerateStudentReport/GenerateStudentReport";

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
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/register-student" element={<RegisterStudent />} />
          <Route path="/generate-attendence-report" element={<GenerateAttendenceReport />} />
          <Route path="/create-schedule" element={<CreateSchedule />} />
          <Route path="/push-notification" element={<PushNotification />} />
          <Route path="/generate-student-report" element={<GenerateStudentReport />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

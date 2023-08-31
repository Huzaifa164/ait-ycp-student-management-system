import logo from "./logo.svg";
import "./App.css";
import AdminLogin from "./pages/AdminLogin/AdminLogin";
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
import HomePage from "./pages/HomePage/HomePage";
import StudentLogin from "./pages/StudentLogin/StudentLogin";
import EditStudent from "./pages/EditStudent/EditStudent";
import EditSchedule from "./pages/EditSchedule/EditSchedule";
import { AdminProvider } from "./context/AdminContext";

function App() {
  return (
    <div className="App">
      <AdminProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route
              path="/generate-attendence-report"
              element={<GenerateAttendenceReport />}
            />
            <Route path="/create-schedule" element={<CreateSchedule />} />
            <Route path="/push-notification" element={<PushNotification />} />
            <Route
              path="/generate-student-report"
              element={<GenerateStudentReport />}
            />
            <Route path="/edit-student" element={<EditStudent />} />
            <Route path="/edit-schedule" element={<EditSchedule />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/student-login" element={<StudentLogin />} />
            <Route path="/student-dashboard" element={<StudentDashboard />} />
            <Route path="/attendence" element={<Attendence />} />
            <Route path="/assignments" element={<Assignments />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/register-student" element={<RegisterStudent />} />
          </Routes>
        </BrowserRouter>
      </AdminProvider>
    </div>
  );
}

export default App;

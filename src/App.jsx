import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from './pages/login';
import Dashboard from './pages/dashboard';

// Pages
import Registration from './pages/registration';
import Addmission from './pages/addmission';
// Future pages: import them yahan kar sakte ho

function App() {
  return (
    <Router>
      <Routes>
        {/* Default page → Login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Login page */}
        <Route path="/login" element={<Login />} />

        {/* Dashboard Layout with Nested Routes */}
        <Route path="/dashboard" element={<Dashboard />}>
          
          {/* 🔹 Registration */}
          <Route path="registration">
            <Route path="add" element={<Registration />} />
            {/* <Route path="view" element={<ViewRegistration />} /> */}
          </Route>
          {/* 🔹 Registration */}
          <Route path="addmission">
            <Route path="add" element={<Addmission />} />
            {/* <Route path="view" element={<ViewRegistration />} /> */}
          </Route>

          {/* 🔹 Users */}
          <Route path="users">
            {/* <Route path="add" element={<Users />} /> */}
            {/* <Route path="view" element={<ViewUsers />} /> */}
          </Route>

          {/* 🔹 Reports */}
          <Route path="reports">
            {/* <Route path="daily" element={<DailyReports />} /> */}
            {/* <Route path="monthly" element={<MonthlyReports />} /> */}
          </Route>

          {/* 🔹 Communicate */}
          <Route path="communicate">
            {/* <Route path="email" element={<Email />} /> */}
            {/* <Route path="chat" element={<Chat />} /> */}
          </Route>

          {/* Help & Profile directly (no submenu) */}
          {/* <Route path="help" element={<Help />} /> */}
          {/* <Route path="profile" element={<Profile />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

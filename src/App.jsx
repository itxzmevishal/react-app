import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from './pages/login';
import Registration from './pages/registration';
import Dashboard from './pages/dashboard';

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
          {/* Registration inside Dashboard */}
          <Route path="registration" element={<Registration />} />

          {/* future pages bhi yahi add kar sakte ho */}
          {/* <Route path="users" element={<Users />} /> */}
          {/* <Route path="reports" element={<Reports />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

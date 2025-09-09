import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from './pages/login';
import Registration from './pages/registration';

function App() {
  return (
    <Router>
      <Routes>
        {/* Default page */}
        <Route path="/" element={<Navigate to="/registration" replace />} />
        {/* Login page */}
        <Route path="/login" element={<Login />} />
        {/* Registration page */}
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </Router>
  );
}

export default App;

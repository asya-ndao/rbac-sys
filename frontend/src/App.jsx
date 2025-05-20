import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import { AuthProvider } from "./contexts/authContext";
import EmployeeDashboard from "./pages/EmployeeDashboard";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/admin-dashboard" />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/admin-dashboard" element={<AdminDashboard />}></Route>
          <Route path="/employee-dashboard" element={<EmployeeDashboard />}></Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;

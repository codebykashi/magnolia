import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import { AuthProvider } from "./utils/auth";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </AuthProvider>
  );
}

export default App

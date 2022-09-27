import { Routes, Route, Link, Outlet } from "react-router-dom";
import { Login, Home, Users } from "../"; 

export default function Navigation() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="dashboard" element={<Home />} />
      <Route path="users" element={<Users />} />
    </Routes>
  );
}

import React, { useEffect, useState } from "react";
import "./styles.users.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Users = ({ user, signOut }) => {
  const [isAuthenticate, setIsAuthenticate] = useState(true);

  useEffect(() => {
    localStorage.getItem("token") !== null
      ? setIsAuthenticate(true)
      : setIsAuthenticate(false);
  }, []);

  let navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticate) {
      return navigate("/");
    }
  }, [isAuthenticate]);

  const cerrarSesion = () => {
    localStorage.removeItem("token");
    setIsAuthenticate(false);
  };

  return (
    <div className="container">
      <div>
        <h1>Users</h1>
        <Link to="/dashboard">Dashboard</Link>
        <div className="icon">{!isAuthenticate ? "🔐" : "🔓"}</div>
      </div>
    </div>
  );
};

export { Users };

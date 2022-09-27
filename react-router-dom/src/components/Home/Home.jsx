import React, { useEffect, useState } from "react";
import "./styles.home.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Home = ({ user, signOut }) => {
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
        <h1>Welcome</h1>
        <Link to="/users">Users</Link>
        <div className="icon">{!isAuthenticate ? "🔐" : "🔓"}</div>
      </div>
    </div>
  );
};

export { Home };

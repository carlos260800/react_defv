import React from "react";
import "./styles.home.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Home = ({ user, signOut }) => {
  const cerrarSesion = () => {
    localStorage.removeItem("token");
    signOut(false);
  };

  return (
    <div className="centrar ">
      <h1>Welcome</h1>
      <h3>{user}</h3>
      {/* <button onClick={cerrarSesion}>Sign Out</button> */}
      <Stack direction="row" spacing={2}>
        <Button
          onClick={cerrarSesion}
          variant="contained"
        >
          Sign Out
        </Button>
      </Stack>
    </div>
  );
};

export { Home };

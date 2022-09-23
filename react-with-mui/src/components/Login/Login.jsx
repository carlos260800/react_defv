import "./styles.login.css";
import { useState, useEffect, Fragment } from "react";
import { loginAPI } from "./api";
import { Home } from "../";
import TextField from "@mui/material/TextField";
import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const Login = () => {
  const [user, setUser] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isAuthenticate, setIsAuthenticate] = useState(false);

  const cambioEnUsuario = (event) => {
    setUser(event.target.value);
  };

  const cambioEnContrasena = (event) => {
    setPassword(event.target.value);
  };

  const mostrarContrasena = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    localStorage.getItem("token") !== null && setIsAuthenticate(true);
  }, []);

  return (
    <Fragment>
      <div className="container contenedor centrar">
        {isAuthenticate ? (
          <Home user={user} signOut={setIsAuthenticate} />
        ) : (
          <div className="formulario">
            <div>
              {/* <input
                placeholder="email"
                type="email"
                onChange={cambioEnUsuario}
                value={user}
              ></input> */}

              <TextField
                id="email"
                label="Email"
                // type="search"
                variant="standard"
                placeholder="email"
                type="email"
                onChange={cambioEnUsuario}
                value={user}
              />
            </div>

            <div className="verContra">
              {/* <input
                placeholder="password"
                type={showPassword ? "text" : "password"}
                onChange={cambioEnContrasena}
                value={password}
              ></input> */}

              <TextField
                id="standard-password-input"
                label="Password"
                // type="password"
                autoComplete="current-password"
                variant="standard"
                placeholder="password"
                type={showPassword ? "text" : "password"}
                onChange={cambioEnContrasena}
                value={password}
              />
              {/* <button onClick={mostrarContrasena}>👀</button> */}
              <Stack direction="row" spacing={2}>
                <Button
                  className="ojos"
                  onClick={mostrarContrasena}
                  variant="contained"
                >
                  👀
                </Button>
              </Stack>
            </div>

            <div className="button-signin">
              {/* <button
                onClick={() =>
                  loginAPI({ email: user, password }, setIsAuthenticate)
                }
              >
                Sign In
              </button> */}

              <Stack direction="row" spacing={2}>
                <Button
                  onClick={() =>
                    loginAPI({ email: user, password }, setIsAuthenticate)
                  }
                  variant="contained"
                >
                  Sign In
                </Button>
              </Stack>
            </div>
          </div>
        )}
        <div className="icon">{!isAuthenticate ? "🔐" : "🔓"}</div>
      </div>
    </Fragment>
  );
};

export { Login };

/* Tipos de datos que podemos declarar
  '', 
  true, false, 
  {}, 
  [], 
  0,1,2,...,
  "texto"
  */

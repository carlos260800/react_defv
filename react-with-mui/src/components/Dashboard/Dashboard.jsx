import "./styles.dashboard.css";
import { useState, useEffect, Fragment } from "react";

const Dashboard = () => {
  const [input, setInput] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  /* Tipos de datos que podemos declarar
  '', 
  true, false, 
  {}, 
  [], 
  0,1,2,...,
  "texto"
*/
  const cambioEnInput = (event) => {
    setInput(event.target.value);
  };

  const mostrarContrasena = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    console.log(input);
  }, [input]);

  useEffect(() => {
    console.log(showPassword);
  }, [showPassword]);

  return (
    <Fragment>
      <input
        type={showPassword ? "text" : "password"}
        onChange={cambioEnInput}
        value={input}
      ></input>
      <button onClick={mostrarContrasena}>👀</button>
    </Fragment>
  );
};

export { Dashboard };

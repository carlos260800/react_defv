import "./styles.css";
import { sendForm } from "./api";

const Form = () => {
  const blurOnUser = () => console.log("usuario");
  const blurOnPass = () => console.log("contraseña");

  return (
    <div>
      <input
        type="text"
        onBlur={blurOnUser}
        className="input-text"
        placeholder="Usuario"
      />
      <input
        type="text"
        onBlur={blurOnPass}
        className="input-text"
        placeholder="Contraseña"
      />
      <input
        onClick={sendForm}
        type="button"
        className="input-button"
        value="Login"
      />
    </div>
  );
};

export { Form };

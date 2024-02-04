//Styles
import styles from "../Modules/Register.module.css";
//Imagenes
import logoPetzifyFormRegister from "../assets/Logos/logoPetzify.png";
//React
import { authApi } from "../ApíConexion/auth";
import { Link } from "react-router-dom";
import { useState } from "react";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const handleRole = (roleParam) => {
    setRole(roleParam);
  };

  const handleCode = async () => {
    try {
      const response = await authApi.post("/code", {
        username,
        password,
        email,
        role,
      });

      let codeVerification = prompt("Escribe el codigo que te llego al email");

      if (codeVerification !== response.data.code)
        return alert("sos un pelotudo");

      handleRegister();
    } catch (error) {
      alert(error.message);
      console.log(error);
    }
  };

  const handleRegister = async () => {
    try {
      await authApi.post("/signup", {
        username,
        password,
        email,
        role,
      });

      alert("te registraste re bien");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={styles.containerRegisterView}>
        <div className={styles.containerBannerRegister}>
          {/* Banner Imagen */}
        </div>
        <div className={styles.containerFormRegister}>
          <div className={styles.registerForm}>
            <section className={styles.submitFormRegister}>
              <section className={styles.logoFormRegister}>
                <img src={logoPetzifyFormRegister} alt="Petzify Logo" />
              </section>

              <input
                required
                placeholder="UserName"
                type="text"
                name="UserName"
                className={styles.submitItem}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <input
                required
                placeholder="Mail"
                type="email"
                name="Mail"
                className={styles.submitItem}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                required
                placeholder="Password"
                type="Password"
                name="Password"
                className={styles.submitItem}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div>
                <button onClick={() => handleRole("user")}>Usuario</button>
                <button onClick={() => handleRole("institution")}>
                  Institucion
                </button>
                <button onClick={() => handleRole("business")}>Negocio</button>
              </div>
              <button
                onClick={() => handleCode()}
                className={styles.btnRegister}
              >
                Crea tu cuenta
              </button>
            </section>
            <section className={styles.trueAcountLogin}>
              <p>
                ¿Tienes cuenta?<Link to={"/Login"}>Ingresa</Link>
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
export default Register;

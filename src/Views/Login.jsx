import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../Modules/Login.module.css";
import logoPetzifyFormLogin from "../assets/Logos/logoPetzify.png";
import { authApi } from "../ApíConexion/auth";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await authApi.post("/signin", {
        username,
        password,
      });

      let convert = JSON.stringify(response.data.user);
      localStorage.setItem("account", convert);
      window.location.href = "/Home";
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <div className={styles.containerLoginView}>
        <div className={styles.containerBannerLogin}>{/* Banner Imagen */}</div>
        <div className={styles.containerFormLogin}>
          <form onSubmit={handleLogin} className={styles.loginForm}>
            <section className={styles.submitFormLogin}>
              <section className={styles.logoFormLogin}>
                <img src={logoPetzifyFormLogin} alt="Petzify Logo" />
              </section>
              <input
                required
                placeholder="UserName"
                type="text"
                name="UserName"
                className={styles.submitItem}
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                required
                placeholder="Password"
                type="password"
                name="Password"
                className={styles.submitItem}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* Btn Login */}
              <button type="submit" className={styles.btnLogin}>
                Accede a tu cuenta
              </button>
            </section>
            <section className={styles.noneAcountRegister}>
              <p>
                ¿No tienes cuenta?
                <Link to={"/Register"}>Crea una</Link>
              </p>
            </section>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;

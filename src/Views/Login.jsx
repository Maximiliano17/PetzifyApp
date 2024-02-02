import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../Modules/Login.module.css";
import logoPetzifyFormLogin from "../assets/Logos/logoPetzify.png";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const body = JSON.stringify({
      username,
      password
    });

    try {
      const response = await fetch("http://localhost:5000/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: body
      });

      if (!response.ok) {
        throw new Error("Failed to login");
      }

      console.log("Login successful");

      // Redirigir al usuario después del inicio de sesión exitoso
       //window.location.href = "/Home"; 

    } catch (error) {
      console.error("Error logging in:", error);
      alert("Error al iniciar sesión. Por favor, verifique sus credenciales.");
    }
  };

  return (
    <>
      <div className={styles.containerLoginView}>
        <div className={styles.containerBannerLogin}>
          {/* Banner Imagen */}
        </div>
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

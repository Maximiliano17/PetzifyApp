//Styles
import styles from "../Modules/Register.module.css"
//Imagenes
import logoPetzifyFormRegister from "../assets/Logos/logoPetzify.png"
//React
import { Link } from "react-router-dom";
import { useState } from "react";

function Register(){
   
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    const body = JSON.stringify({
      username,
      password,
      email,
      role
    });

    try {
      const response = await fetch("http://localhost:5000/api/v1/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: body
      });

      if (!response.ok) {
        throw new Error("Failed to register");
      }

      console.log("Registration successful");

      // Redirigir al usuario después del registro exitoso
        window.location.href = "/Login";

    } catch (error) {
      console.error("Error registering:", error);
      alert("Error al registrarse. Por favor, verifique sus datos e inténtelo nuevamente.");
    }
  };

const handleCode = async () => {
    setLoading(true);
    
    try {
      const response = await fetch("http://localhost:5000/api/v1/auth/code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username,
          password,
          email,
          role,
        })
      });
  
      const data = await response.json();
      
      setCode(data.code);
      setLoading(false);
  
      // Mostrar un cuadro de diálogo para ingresar el código de verificación
      Prompt.show(
        "Código De Verificación",
        "Ingrese el código de confirmación que recibió en su correo electrónico.",
        (verificationCode) => {
          if (verificationCode !== data.code) {
            Alert.alert("Código Incorrecto");
          } else {
            console.log("Código correcto");
            handleSubmit();
          }
        }
      );
    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
      // Manejo del error en la solicitud
      Danger(error.message);
    }
};
  

    return(
        <>
          <div className={styles.containerRegisterView}>
            <div className={styles.containerBannerRegister}>
                {/* Banner Imagen */}
            </div>
           <div className={styles.containerFormRegister}>
           <form className={styles.registerForm}>
             <section className={styles.submitFormRegister}>
             <section className={styles.logoFormRegister}>
                <img src={logoPetzifyFormRegister} alt="Petzify Logo"/>
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <input 
                    required 
                    placeholder="Password" 
                    type="Password" 
                    name="Password" 
                    className={styles.submitItem}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <select>
                  <option
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    >
                    Usuario.
                  </option>
                  <option
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    >
                    Institucion.
                  </option>
                  <option
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    >
                    Negocio.
                  </option>
                </select>

                {/* Btn Login */}
                <button onClick={() => handleRegister()} className={styles.btnRegister}>
                    Crea tu cuenta 
                </button>    

             </section>
             <section className={styles.trueAcountLogin}>
                <p>¿Tienes cuenta?<Link to={"/Login"}>Ingresa</Link></p>
             </section>
            </form>
           </div>
        </div>
        </>
    )
}
export default Register;


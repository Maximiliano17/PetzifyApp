//Styles
import styles from "../Modules/ProfilePersonalMin.module.css";
//Imagenes
import profileIcon from "../assets/Icons/noProfileIcon.png";
//React
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
 
function ProfilePersonalMin() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    let data = localStorage.getItem("account");

    if (!data) return console.log("no estas logeado");

    let convert = JSON.parse(data);

    setUsername(convert.username);
  }, []);

  return (
    <>
      <div className={styles.containerProfilePersonalMin}>
        <article className={styles.profileCardMin}>
          <section className={styles.imagenProfileMin}>
            <img src={profileIcon} alt="Icon No Profile" />
            <p>{username}</p>
          </section>
          {username ? (
          <Link to={"/Profile"} className={styles.btnCreateProfileMin}>
            Ver perfil
          </Link>
          ) : (
          <Link to={"/Login"} className={styles.btnCreateProfileMin}>
            Crea una cuenta
          </Link>
          )}
        </article>
      </div>

      <div className={styles.statsProfileMin}></div>
    </>
  );
}

export default ProfilePersonalMin;

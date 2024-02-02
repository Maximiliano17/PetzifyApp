//Styles
import styles from "../Modules/ProfilePersonalMin.module.css"
//Imagenes
import profileIcon from "../assets/Icons/noProfileIcon.png"
//React
import { Link } from "react-router-dom"
function ProfilePersonalMin() {

  return (
    <>
     <div className={styles.containerProfilePersonalMin}>
       <article className={styles.profileCardMin}>
        <section className={styles.imagenProfileMin}>
         <img src={profileIcon} alt="Icon No Profile" />
         <p>Tu Usuario Aqui</p>
        </section>
        <Link to={"/Login"} className={styles.btnCreateProfileMin}>
          Crea una cuenta.
        </Link>
       </article>
     </div>
     
     <div className={styles.statsProfileMin}>
       
     </div>
    </>
  )
}

export default ProfilePersonalMin

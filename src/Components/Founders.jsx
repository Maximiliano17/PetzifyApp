//Styles
import styles from "../Modules/Founders.module.css"
//Imagenes  
import fotoFounders from "../assets/Profiles/Founders.png"
import Maximiliano from "../assets/Profiles/MaximilianoDosSantos.png"
import JuamPablo from "../assets/Profiles/JuamPabloVillalba.png"

function Founders(){
    return(
        <>
         <div className={styles.containerFounders}>
          <img src={fotoFounders} alt="Foto Founders" className={styles.fotoFounders}/>  
          <p>Nuestros Fundadores 👨🏻‍💻</p>
         </div>

         <div className={styles.containerRedesFounders}>
            <article className={styles.profileMaxi}>
            <img src={Maximiliano} alt="Foto Founders" />  
            <div className={styles.btns}>
            <p>Ve Mi Perfil 🤓</p>
            <button>
             ¡Ve Mis Redes!
            </button>
            </div>
            </article>
            <article className={styles.profileJuan}>
            <img src={JuamPablo} alt="Foto Founders" />  
            <div className={styles.btns}>
            <p>Ve Mi Perfil 😲</p>
            <button>
             ¡Ve Mis Redes!
            </button>
            </div>
            </article>
         </div>
        </>
    )
}

export default Founders;
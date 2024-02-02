//Styles
import styles from "../Modules/PostForm.module.css"
//Imagenes
import iconPerfil from "../assets/Icons/noProfileIcon.png"

function PostForm(){
    return(
        <>
         <div className={styles.containerPostForm}> 
         {/* Formulario de Posteos*/}
            <article className={styles.post}>
              <img src={iconPerfil} alt="Imagen De Perfil" />
              <button className={styles.btnOpenModal}>
                ¡Crea un posteo!
              </button>
            </article> 
            <article className={styles.filterPost}>
            </article>
         </div>
        </>
    )  
}

export default PostForm;
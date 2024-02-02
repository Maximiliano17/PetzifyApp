//Styles
import styles from "../Modules/Home.module.css"
//Components
import Founders from "../Components/Founders"
import Header from "../Components/Header"
import ProfilePersonalMin from "../Components/ProfilePersonalMin"
//import PostForm from "../Components/PostForm"

function Home() {

    return (
      <>
     {/*Header*/}
      <Header />
       <div className={styles.containerHome}>
         {/*containerProfile*/}
         <article className={styles.containerProfile}>
          <ProfilePersonalMin />
         </article>
          {/*containerPost*/}
         <section className={styles.containerPost}>
          { /*<PostForm /> */ }
         </section> 
          {/*containerFounders*/}
         <article className={styles.containerFounders}>
          <Founders />
         </article>
       </div>
      </>
    )
  }
  
  export default Home
  
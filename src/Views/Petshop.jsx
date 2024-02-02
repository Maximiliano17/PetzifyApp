//Styles
import styles from "../Modules/Petshop.module.css"
//Components
import Header from "../Components/Header"
function Petshop(){
  
    return(
        <> 
        <Header />
         <div className={styles.containerPetshopView}>
          <section className={styles.searchShopContainer}>
            <div className={styles.headerSearch}>
              <input className={styles.searchItem} name="Serch" placeholder="Buscar productos 🧉" />
            </div> 
            <div className={styles.resultSearch}>

            </div>
          </section>
          <section className={styles.itemsShopContainer}>

          </section>
         </div>
        </>
    )
}

export default Petshop;
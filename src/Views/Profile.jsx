//Styles
import styles from "../modules/Profile.module.css";
//Components
import Header from "../Components/Header";
//Imagenes
import noUserFound from "../assets/Icons/noProfileIcon.png";
import noPetFound from "../assets/Icons/noPetAcount.png";
import { useEffect, useState } from "react";

function Profile() {
  const [username, setUsername] = useState("");
  const [banner, setBanner] = useState("");
  const [imageProfile, setImageProfile] = useState("");

  useEffect(() => {
    let data = localStorage.getItem("account");

    if (!data) return console.log("no estas logeado");

    let convert = JSON.parse(data);

    setUsername(convert.username);
    setBanner(convert.banner);
    setImageProfile(convert.profile);

    console.log(convert);
  }, []);

  return (
    <>
      <Header />
      <div className={styles.containerProfileView}>
        <section className={styles.profileCard}>
          <div className={styles.bannerProfile}>
            {banner && (
              <img className={styles.bannerProfileimage} src={banner} />
            )}

            <img
              className={styles.imageProfile}
              src={imageProfile ? imageProfile : noUserFound}
              alt="Imagen De Perfil"
            />
          </div>
          <div className={styles.infoProfileView}>
            <section className={styles.infoUser}>
              {username ? <h1>{username}</h1> : <h1>User#124345</h1>}
            </section>
            <section className={styles.optionEditProfile}>
              <button className={styles.btnEditpProfile}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-pencil-square"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                  <path
                    fill-rule="evenodd"
                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                  />
                </svg>
              </button>
            </section>
          </div>
        </section>
        <section className={styles.petCardRes}>
          <img
            className={styles.imagePetProfile}
            src={noPetFound}
            alt="Imagen De No Perfil De Mascota"
          />
        </section>
        <section className={styles.petCard}>
          <img
            className={styles.imagePetProfile}
            src={noPetFound}
            alt="Imagen De No Perfil De Mascota"
          />
          <p>No tienes mascotas...</p>
        </section>
      </div>
    </>
  );
}

export default Profile;

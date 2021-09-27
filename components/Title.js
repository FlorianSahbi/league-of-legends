import styles from "../styles/Title.module.css";

const Title = () => {
  return (
    <div className={styles.titleWrapper}>
      <h1>
        <div className={styles.revealFromDownside}>
          <span className={styles.intro}>
            Choisissez votre
          </span>
        </div>

        <div className={styles.revealFromUpside}>
          <span className={styles.title}>
            champion
          </span>
        </div>
      </h1>

      <p className={styles.description}>
        Que vous souhaitiez foncer dans la mêlée, soutenir vos alliés ou trouver un entre-deux, vous trouverez forcément votre bonheur dans la Faille.
      </p>
    </div>
  )
}

export default Title;

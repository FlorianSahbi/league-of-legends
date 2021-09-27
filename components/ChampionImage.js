/* eslint-disable @next/next/no-img-element */

import styles from "../styles/ChampionImage.module.css";

const activeState = `${styles.revealWrapper} ${styles.show} ${styles.aOn}`;
const deactiveState = `${styles.revealWrapper} ${styles.hide} ${styles.aOff}`;

const ChampionImage = ({ img, isActive }) => {
  return (
    <div className={isActive ? activeState : deactiveState}>
      <figure className={styles.championFigure}>
        <img className={styles.championImage} src={img} alt="alt" />
      </figure>
    </div>
  );
};

export default ChampionImage;

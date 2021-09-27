import styles from "../styles/ChampionCaption.module.css";

const activeState = `${styles.championCaption} ${styles.show}`;
const deactiveState = `${styles.championCaption}`;

const ChampionCaption = ({ name, title, isActive }) => {
  return (
    <p className={isActive ? activeState : deactiveState}>
      <strong className={styles.championCaptionName}>{name}</strong>
      <span className={styles.championCaptionTitle}>{title}</span>
    </p>
  );
};

export default ChampionCaption;

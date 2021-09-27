import styles from "../styles/RoleSelector.module.css";

const RoleSelector = ({ data, onClick }) => {
  return (
    <nav className={styles.roleWrapper}>
      {data.map(({ id, role }, index) => {
        return (
          <button className={styles.button} key={id} onClick={() => onClick(index)}>
            {role}
          </button>
        )
      })}
    </nav>
  )
}

export default RoleSelector;

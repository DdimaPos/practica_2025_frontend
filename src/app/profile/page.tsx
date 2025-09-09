import styles from "./profile.module.css";

export default function Profile() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.header}>My Profile</h1>
      <p className={styles.info}>Example Page.</p>
    </div>
  );
}

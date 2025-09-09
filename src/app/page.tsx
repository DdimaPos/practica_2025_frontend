import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className="text-2xl font-bold">Bienvenido a la página principal</h1>
      <p>Это твой контент справа от Navbar.</p>
    </div>
  );
}

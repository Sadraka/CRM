import styles from "./page.module.css";
import Homepage from "./components/templates/home/Homepage";

export default function Home() {
  return (
    <div className={styles.container}>
      <Homepage />
    </div>
  );
}

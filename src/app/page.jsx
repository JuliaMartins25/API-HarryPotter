import styles from "./page.module.css";
import Characters from "@/components/harryList";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
<Characters />
      </main>

      <footer className={styles.footer}>
        <p>© 2025 HP-API. All rights reserved.</p>
      </footer>
    </div>
  );
}
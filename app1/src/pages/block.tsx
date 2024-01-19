import { useState } from "react";
import styles from "./index.module.css";
import { useRouter } from "next/router";

export default function Home() {
  return (
    <main className={styles.login}>
      <div>
        <h1>Sistema bloqueado</h1>
      </div>
    </main>
  );
}

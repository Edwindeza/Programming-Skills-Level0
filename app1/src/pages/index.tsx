import { useState } from "react";
import styles from "./index.module.css";
import { useRouter } from "next/router";

export default function Home() {
  const loginAttemptsLimit = 3;
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [sessionAttempt, setSessionAttempt] = useState(0);
  const [loginError, setLoginError] = useState(false);
  const router = useRouter();
  
  const onSubmit = () => {
    if(user === 'admin' && password === 'admin') {
      router.push('/home');
      setLoginError(false);
    } else {
      setSessionAttempt((prev) => prev+1)
      setLoginError(true);
      if (sessionAttempt + 1 > 2) {
        router.push('/block');
      }
    }
  }

  return (
    <main className={styles.login}>
      <div>
        <h2>BIENVENID@!</h2>
        <div className={styles.formGroup}>
          <input type="text" name="user" placeholder="user" onChange={(e) => setUser(e.target.value)} />
        </div>
        <div className={styles.formGroup}>
          <input type="password" name="password" id="" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className={styles.formGroup}>
          <button onClick={onSubmit} className={styles.sendButton}>INGRESAR</button>
        </div>
        <div className={styles.loginError}>
          {loginError && <p>Ups! wrong data, you have {loginAttemptsLimit - sessionAttempt} attempts</p>}
        </div>
      </div>
    </main>
  );
}

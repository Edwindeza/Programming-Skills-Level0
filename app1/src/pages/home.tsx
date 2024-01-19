import { useState } from 'react';
import styles from './home.module.css';

export default function Home() {
  const [showBalance, setShowBalance] = useState(false);
  const [balance, setBalance] = useState(2000);

  const handleShowBalance = () => {
    setShowBalance((prev) => !prev)
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.balance}>
          <button onClick={handleShowBalance}> {!showBalance ? 'Show' : 'Hide'} </button>
          <h2>BALANCE{`${showBalance ? ': $'+balance : ''}`} </h2>
        </div>
        <div className={styles.logout}>
          <button>Logout</button>
        </div>
      </header>
      <main>

      </main>
    </>
    
  );
}


/*
* Users must be able to log in with a username and password                             - Ready
* If the user enters the wrong credentials three times, the system must lock them out.  - Ready
* The initial balance in the bank account is $2000.                                     - Ready
* The system must allow users to deposit, withdraw, view, and transfer money.           - Pending
* The system must display a menu for users to perform transactions                      - Pending

*/
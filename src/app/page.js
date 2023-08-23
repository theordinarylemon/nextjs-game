import Image from 'next/image'
import styles from './page.module.css'
import Game from './game'

export default function Home() {
  return (
    <>
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Build by Next.js
        </p>
      </div>

      <div className={styles.center}>
        <h1>Get Started to Play the Game! </h1>
      </div>

      <div className={styles.grid}>
        <a
          href="#"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
           What is the Rule? 
          </h2>
          <p>Two-person game.</p>
        </a>

        <a
          href="#"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
        
          <h2>
          How to Get Started
          </h2>
          <p>
          Click ramdom grid to get started.
          </p>
        </a>
      </div>
      <div className={styles.gameWrap}>
      <Game />
      </div>
    </main>
    </>
  )
}

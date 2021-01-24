import Link from 'next/link'
import styles from './index.module.scss'

export default function Home() {
  return (
    <div className="container">
      <header className="text-center mb-4">
        <h1 className="h1 mb-3">Xylit</h1>
        <p className="h2">Next Level UI Framework</p>
      </header>

      <div className={styles.grid}>
        <Link href="/grid">
          <a className={styles.card}>
            <h3>Grid &rarr;</h3>
            <p>Grid Utilities</p>
          </a>
        </Link>

        <Link href="/typography">
          <a className={styles.card}>
            <h3>Typography &rarr;</h3>
            <p>Typography Utilities</p>
          </a>
        </Link>

        <Link href="/box">
          <a className={styles.card}>
            <h3>Box &rarr;</h3>
            <p>Box Utilities</p>
          </a>
        </Link>
      </div>
    </div>
  )
}

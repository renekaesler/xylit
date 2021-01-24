import styles from './box.module.scss'

export default function Home() {
  return (
    <main className="container">
      <header className="text-center mb-4">
        <h1 className="h1 mb-3">Xylit</h1>
        <p className="h2">Box System</p>
      </header>

      <h3 className="h5">Horizontal Box</h3>

      <div className="hbox gap-3">
        <div className={styles.tile}>1</div>
        <div className={styles.tile}>2</div>
        <div className={styles.tile}>3</div>
        <div className={styles.tile}>4</div>
        <div className={styles.tile}>5</div>
        <div className={styles.tile}>6</div>
        <div className={styles.tile}>7</div>
        <div className={styles.tile}>8</div>
        <div className={styles.tile}>9</div>
        <div className={styles.tile}>10</div>
        <div className={styles.tile}>11</div>
        <div className={styles.tile}>12</div>
        <div className={styles.tile}>13</div>
        <div className={styles.tile}>14</div>
        <div className={styles.tile}>15</div>
        <div className={styles.tile}>16</div>
      </div>

      <h3 className="h5">Vertical Box</h3>

      <div style={{ height: '200px' }} className="vbox items-center gap-3">
        <div className={styles.tile}>1</div>
        <div className={styles.tile}>2</div>
        <div className={styles.tile}>3</div>
        <div className={styles.tile}>4</div>
        <div className={styles.tile}>5</div>
        <div className={styles.tile}>6</div>
        <div className={styles.tile}>7</div>
        <div className={styles.tile}>8</div>
        <div className={styles.tile}>9</div>
        <div className={styles.tile}>10</div>
        <div className={styles.tile}>11</div>
        <div className={styles.tile}>12</div>
        <div className={styles.tile}>13</div>
        <div className={styles.tile}>14</div>
        <div className={styles.tile}>15</div>
        <div className={styles.tile}>16</div>
      </div>
    </main>
  )
}

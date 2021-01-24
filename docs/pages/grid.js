import styles from './grid.module.scss'
import classes from 'classnames';

export default function Home() {
  return (
    <main className="container">
      <header className="text-center mb-4">
        <h1 className="h1 mb-3">Xylit</h1>
        <p className="h2">Grid System</p>
      </header>

      <section className="section">
        <h2 className="h4">The Grid</h2>

        <div className="grid cols-8 gap-1">
          <div className={classes('col-1', styles.tile)}>1</div>
          <div className={classes('col-1', styles.tile)}>2</div>
          <div className={classes('col-1', styles.tile)}>3</div>
          <div className={classes('col-1', styles.tile)}>4</div>
          <div className={classes('col-1', styles.tile)}>5</div>
          <div className={classes('col-1', styles.tile)}>6</div>
          <div className={classes('col-1', styles.tile)}>7</div>
          <div className={classes('col-1', styles.tile)}>8</div>

          <div className={classes(styles.tile, 'col-1')}></div>
          <div className={classes(styles.tile, 'col-3')}>3</div>
          <div className={classes(styles.tile, 'col-1')}></div>
          <div className={classes(styles.tile, 'col-2 col-s7')}>7-8</div>
          <div className={classes(styles.tile, 'col-2 col-s2')}>2+2</div>
          <div className={classes(styles.tile, 'col-4 col-s5')}>5-8</div>
          <div className={classes(styles.tile, 'col-4')}>1-4</div>
          <div className={classes(styles.tile, 'col-3 col-en1')}>6..</div>
          <div className={classes(styles.tile, 'col-s2 col-en1')}>2..</div>
          <div className={classes(styles.tile, 'col-s4 col-en2')}>4..</div>
          <div className={classes(styles.tile, 'col-2')}>1-2</div>
          <div className={classes(styles.tile, 'col-2 col-e5')}>4-5</div>
        </div>
      </section>
    </main>
  )
}

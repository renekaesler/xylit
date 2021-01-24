import styles from './typography.module.scss'

export default function Home() {
  return (
    <main className="container">
      <header className="text-center mb-4">
        <h1 className="h1 mb-3">Xylit</h1>
        <p className="h2">Typography</p>
      </header>

      <p className="body1">
        Type is all set with the <code>rems</code>, so font-sizes and spacial relationships can be
        responsively sized based on a single <code>&lt;html&gt;</code> font-size property. Out of the
        box, Xylit never changes the <code>&lt;html&gt;</code> font-size, but it's there in case you
        need it for your project. All measurements are still base 16 though so, an
        <code>&lt;p&gt;</code> with <code>1.0rem</code>font-size just means <code>16px</code>.
      </p>

      <ul className={styles.typescale}>
        <li className="h1">Headline 1</li>
        <li className="h2">Headline 2</li>
        <li className="h3">Headline 3</li>
        <li className="h4">Headline 4</li>
        <li className="h5">Headline 5</li>
        <li className="h6">Headline 6</li>
        <li className="subtitle1">Subtitle 1</li>
        <li className="subtitle2">Subtitle 2</li>
        <li className="body1">Body 1</li>
        <li className="body2">Body 2</li>
        <li className="button">Button</li>
        <li className="caption">Caption</li>
        <li className="overline">Overline</li>
      </ul>
    </main>
  )
}

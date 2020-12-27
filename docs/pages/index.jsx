export default function Home() {
  return (
    <div className="container">
      <section className="header">
        <div className="h1 mb-3">Xylit</div>
        <div className="h2">Next Level UI Components</div>
      </section>

      <section className="section">
        <h2 className="h4">The Grid</h2>

        <div className="grid cols-8 gap-1">
          <div className="tile col-1">1</div>
          <div className="tile col-1">2</div>
          <div className="tile col-1">3</div>
          <div className="tile col-1">4</div>
          <div className="tile col-1">5</div>
          <div className="tile col-1">6</div>
          <div className="tile col-1">7</div>
          <div className="tile col-1">8</div>

          <div className="tile col-1"></div>
          <div className="tile col-3">3</div>
          <div className="tile col-1"></div>
          <div className="tile col-2 col-s7">7-8</div>
          <div className="tile col-2 col-s2">2+2</div>
          <div className="tile col-4 col-s5">5-8</div>
          <div className="tile col-4">1-4</div>
          <div className="tile col-3 col-en1">6..</div>
          <div className="tile col-s2 col-en1">2..</div>
          <div className="tile col-s4 col-en2">4..</div>
          <div className="tile col-2">1-2</div>
          <div className="tile col-2 col-e5">4-5</div>
        </div>
      </section>

      <section className="section">
        <h2 className="h4">Typography</h2>

        <p className="body1">
          Type is all set with the <code>rems</code>, so font-sizes and spacial relationships can be
          responsively sized based on a single <code>&lt;html&gt;</code> font-size property. Out of the
          box, Xylit never changes the <code>&lt;html&gt;</code> font-size, but it's there in case you
          need it for your project. All measurements are still base 16 though so, an
          <code>&lt;p&gt;</code> with <code>1.0rem</code>font-size just means <code>16px</code>.
        </p>

        <ul className="type-scale">
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
      </section>

      <section className="section">
        <h2 className="h4">Buttons</h2>

        <button className="x-btn">Text</button>
        <button className="x-btn x-btn--filled">Text</button>
        <button className="x-btn x-btn--outlined">Outlined</button>
      </section>

      <section className="section">
        <h2 className="h4">Box</h2>
        <h3 className="h5">Horizontal Box</h3>

        <div className="hbox gap-3">
          <div className="tile">1</div>
          <div className="tile">2</div>
          <div className="tile">3</div>
          <div className="tile">4</div>
          <div className="tile">5</div>
          <div className="tile">6</div>
          <div className="tile">7</div>
          <div className="tile">8</div>
          <div className="tile">9</div>
          <div className="tile">10</div>
          <div className="tile">11</div>
          <div className="tile">12</div>
          <div className="tile">13</div>
          <div className="tile">14</div>
          <div className="tile">15</div>
          <div className="tile">16</div>
        </div>

        <h3 className="h5">Vertical Box</h3>

        <div style={{ height: '200px' }} className="vbox items-center gap-3">
          <div className="tile">1</div>
          <div className="tile">2</div>
          <div className="tile">3</div>
          <div className="tile">4</div>
          <div className="tile">5</div>
          <div className="tile">6</div>
          <div className="tile">7</div>
          <div className="tile">8</div>
          <div className="tile">9</div>
          <div className="tile">10</div>
          <div className="tile">11</div>
          <div className="tile">12</div>
          <div className="tile">13</div>
          <div className="tile">14</div>
          <div className="tile">15</div>
          <div className="tile">16</div>
        </div>
      </section>
    </div>
  )
}

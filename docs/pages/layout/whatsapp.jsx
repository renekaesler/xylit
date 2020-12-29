export default function FirstPost() {
  return (
    <div className="whatsapp bg-grey-300">
      <div className="container py-4">
        <div className="dock s-100 shadow-3 rounded">
          <div className="dock-xtx bg-grey-200">
            Top
          </div>

          <div className="dock-lll bg-light">Left</div>

          <div className="dock-body bg-grey-100">
            Body
          </div>

          <div className="dock-xbx bg-grey-200">Bottom</div>
        </div>
      </div>

      <style jsx>{`
          .whatsapp {
            width: 100vw;
            height: 100vh;
          }

          .whatsapp:before {
            content: "";
            height: 127px;
            position: fixed;
            top: 0;
            width: 100%;
            background-color: #009688;
          }

          .container {
            position: relative;
            margin: 0 auto;
            max-width: 950px;
            height: 100vh;
          }
        `}</style>
    </div>
  )
}
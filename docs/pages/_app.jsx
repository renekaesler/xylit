import '../../style/xylit.scss';

export default function App({ Component, pageProps }) {
  return <>
    <Component {...pageProps} />
    <style jsx global>{`
      * { box-sizing: border-box; }

      html, body {
        font-family: 'Roboto', sans-serif;
        display: flow-root;
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
      }
  
      .container {
        max-width: 960px;
        margin: 0 auto;
      }
  
      .tile {
        display: flex;
        align-items: center;
        justify-content: center;
        background: #EEE;
        border-radius: 4px;
        height: 30px;
        min-width: 50px;
      }
  
      .header, .section {
        margin-bottom: 4rem;
      }
  
      .header {
        text-align: center;
        margin-top: 8rem;
        margin-bottom: 8rem;
      }
  
      .type-scale > li {
        display: flex;
        flex-direction: column;
        min-height: 30px;
        padding: 12px 16px 12px 24px;
        overflow: hidden;
        cursor: pointer;
      }
  
      .type-scale > li:hover {
        background: #FAFAFA;
        outline: 1px solid #EEEEEE;
      }
    `}</style>
  </>
}
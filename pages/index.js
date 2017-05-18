import Head from 'next/head'
import ButtonEmoji from '../components/buttonemoji'

export default () => (
  <div className="main">
    <Head>
      <title>Victor Fernandez</title>
      <meta charset='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel="stylesheet" href="/static/global.css" />
      <link rel="stylesheet" href="https://gitcdn.xyz/repo/ellekasai/twemoji-awesome/gh-pages/twemoji-awesome.css" />
    </Head>


    <a href="/" className="symbol">
      <i className="twa twa-2x twa-gem animated fadeInLeft"></i>
      <i className="twa twa-2x twa-zap animated fadeInRight"></i>
    </a>

    <h1>Hey. I’m Víctor.</h1>

    <p className="subtitle">I’m a multidisciplinary designer based in Buenos Aires. I currently lead a team of talented designers in crafting  memorable, scalable and simple user experiences at Auth0.</p>

    <ButtonEmoji type="postbox" title="Send me an e-mail" url="mailto:victor@auth0.com">
      Always happy to chat
    </ButtonEmoji>

    <ButtonEmoji type="wave" title="Say hi on twitter" url="https://twitter.com/vctrfrnndz">
      @vctrfrnndz
    </ButtonEmoji>

    <ButtonEmoji type="unicorn-face" title="Check my projects on Github" url="https://github.com/vctrfrnndz">
      Some cool OSS stuff
    </ButtonEmoji>

    <style jsx>{`

        .symbol {
          margin-bottom: 4rem;
          display: block;
        }

        .symbol i {
          position: relative;
          font-style: normal;
        }



        .main {
          padding: 2rem;
          min-width: 300px;
        }

        h1 {
          font-size: 1.15em;
          margin-bottom: 2rem;
        }

        .subtitle {
          max-width: 550px;
          line-height: 1.8;
          margin-bottom: 3rem;
          opacity: 0.84;
        }

        @media (min-width: 600px) {
          .symbol {
            margin-bottom: 8rem;
          }

          .symbol i {
            transition: transform 0.5s ease;
          }

          .symbol:hover .twa-zap {
            transform: translateX(-20px);
          }

          .symbol:hover .twa-gem {
            transform: translateX(0);
          }

          .main {
            padding: 5rem;
          }

          h1 {
            font-size: 1.8em;
            margin-bottom: 4rem;
          }

          .subtitle {
            font-size: 1.2em;
            margin-bottom: 5rem;
            opacity: 0.84;
          }
        }
    `}</style>

  </div>
)

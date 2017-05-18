export default ({type, url, title, children}) => (
  <a href={url}>
    <div className="contents">
      <i className={`twa twa-lg twa-${type}`}></i>
      <div>
        <strong>{title}</strong>
        {children}
      </div>
    </div>

    <style jsx>{`
        a {
          color: currentColor;
          text-decoration: none;
          color: rgba(0,0,0,.45);
          line-height: 1.5;
          margin-bottom: 2rem;
          margin-right: 3rem;

        }

        .contents {
          display: flex;
          align-items: center;
        }

        strong {
          color: rgba(0,0,0,.84);
          display: block;
        }

        i {
          position: relative;
          margin-right: 1rem;
        }

        @media (min-width: 600px) {
          a:hover i {
            animation: movin 1s;
          }
        }

        @media (min-width: 1000px) {
          a {
            display: inline-block;
          }
        }

        @keyframes movin {
          from {
            transform: scale3d(1, 1, 1);
          }

          10%, 20% {
            transform: scale3d(.7, .7, .7) rotate3d(0, 0, 1, -4deg);
          }

          30%, 50%, 70%, 90% {
            transform: scale3d(1.2, 1.2, 1.2) rotate3d(0, 0, 1, 4deg);
          }

          40%, 60%, 80% {
            transform: scale3d(1.2, 1.2, 1.2) rotate3d(0, 0, 1, -4deg);
          }

          to {
            transform: scale3d(1, 1, 1);
          }
        }
    `}</style>
  </a>
)

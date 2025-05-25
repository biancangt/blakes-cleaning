export default function CleaningServiceCTA() {
  return (
    <>
      <style>{`
        :root {
          --bg-base: #fffaf5;
          --bg-soft: #f9f1e4;
          --bg-highlight: #f2d4bc;
          --accent: #d89270;
          --accent-dark: #c67957;
          --text-dark: #5a4b41;
          --text-mid: #8b7667;
          --text-light: #a59285;
          --border-soft: #e8c0a0;
        }

        @keyframes blink {
          0%, 100% {
            opacity: 1;
            box-shadow: 0 0 15px var(--accent);
          }
          50% {
            opacity: 0.85;
            box-shadow: 0 0 25px var(--accent-dark);
          }
        }

        .cleaning-cta {
          background-color: var(--bg-soft);
          color: var(--text-dark);
          border: 2px solid var(--border-soft);
          border-radius: 12px;
          max-width: 900px;
          margin: 40px auto;
          padding: 40px 30px;
          text-align: center;
          animation: blink 1.0s infinite;
          box-shadow: 0 0 15px var(--accent);
          transition: box-shadow 0.3s ease;
        }

        .cleaning-cta:hover {
          box-shadow: 0 0 35px var(--accent-dark);
          opacity: 1;
          animation-play-state: paused;
        }

        .cleaning-cta__title {
          font-size: 2rem;
          margin-bottom: 10px;
          font-weight: 700;
        }

        .cleaning-cta__subtitle {
          font-size: 1.2rem;
          margin-bottom: 30px;
          color: var(--text-mid);
        }

        .cleaning-cta__buttons {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .btn {
          padding: 14px 36px;
          font-weight: 600;
          border-radius: 30px;
          font-size: 1.1rem;
          cursor: pointer;
          border: 2px solid var(--accent);
          transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
          min-width: 140px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          color: var(--bg-base);
          background-color: var(--accent);
        }

        .btn:hover {
          background-color: var(--accent-dark);
          border-color: var(--accent-dark);
          color: var(--bg-base);
        }

        /* Botão secundário reutiliza btn mas com override */
        .btn-secondary {
          background-color: transparent;
          color: var(--accent);
          border-color: var(--accent);
        }

        .btn-secondary:hover {
          background-color: var(--accent);
          color: var(--bg-base);
          border-color: var(--accent-dark);
        }

        /* Responsividade */
        @media (max-width: 480px) {
          .cleaning-cta {
            max-width: 320px !important;
            width: 90vw !important;
            margin: 20px auto !important;
            padding: 30px 20px !important;
          }

          .cleaning-cta__title {
            font-size: 1.6rem !important;
          }

          .cleaning-cta__subtitle {
            font-size: 1rem !important;
          }

          .cleaning-cta__buttons {
            flex-direction: column !important;
            gap: 15px !important;
          }

          .btn {
            min-width: 100% !important;
            padding: 12px 0 !important;
          }
        }
      `}</style>

      <section className="cleaning-cta" role="region" aria-label="Call to Action">
        <h2 className="cleaning-cta__title">Ready for a Spotless Home?</h2>
        <p className="cleaning-cta__subtitle">
          Book your cleaning service now!
        </p>
        <div className="cleaning-cta__buttons">
          <a href="sms:+12544888917" className="btn">
            Book Now
          </a>
        </div>
      </section>
    </>
  );
}

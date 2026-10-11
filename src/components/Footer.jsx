import Social from "./Social";

export default function Footer() {
  return (
    <footer>
      <div className="footer--container">
        <Social />
        <h1>Francisco Venes</h1>
        <p className="footer--summary">
          Junior full-stack developer (React, Next.js, Node.js, PostgreSQL) with
          a research background in socioenvironmental conflicts.
        </p>
        <p className="footer--credits">
          Designed by Francisco Venes. Inspired on{" "}
          <a
            href="https://github.com/rammcodes/Dopefolio"
            target="_blank"
            rel="noreferrer"
          >
            Dopefolio
          </a>
          , by{" "}
          <a
            href="https://www.rammaheshwari.com/"
            target="_blank"
            rel="noreferrer"
          >
            Ram Maheshwari
          </a>
        </p>
      </div>
    </footer>
  );
}

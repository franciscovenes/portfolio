import Social from "./Social";

export default function Footer() {
  return (
    <footer>
      <div className="footer--container">
        <Social />
        <h1>Francisco Venes</h1>
        <p className="footer--summary">
          Frontend developer and React developer. Dividing my time between
          studying socioenvironmental conflicts and web development.
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

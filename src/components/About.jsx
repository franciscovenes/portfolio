export default function About() {
  return (
    <div id="about" className="about--container section--container">
      <h1 className="section--title">About</h1>
      <div className="about--details">
        <div className="about--summary summary">
          <p>
            I&apos;m a Frontend Web Developer and a Political Ecologist scholar.
            I divide my time between my passion for understanding
            socioenvironmental conflicts and the excitement of building new
            websites and applications.
          </p>
          <p>
            I&apos;m open to Job opportunities where I can contribute, learn and
            grow. If you have a good opportunity that matches my skills and
            experience then don&apos;t hesitate to contact me.
          </p>
        </div>

        <a className="animate--fade about--contact--link" href="/#contact">
          Contact me
        </a>
        <div className="about--skills">
          <h2>My skills</h2>
          <ul className="about--skills--list">
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascipt</li>
            <li>React</li>
            <li>React-router</li>
            <li>Git</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div id="about" className="about--container section--container">
      <h1 className="section--title">About</h1>
      <div className="about--details">
        <p className="summary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis
          tempora explicabo quae quod deserunt eius sapiente
        </p>
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

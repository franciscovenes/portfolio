import Social from "./Social";
export default function Hero() {
  return (
    <div id="hero" className="hero--container">
      <h1>Francisco&apos;s portfolio</h1>
      <p className="summary">
        Dividing my time between studying socioenvironmental conflicts and web
        development. Passionate about Javascript and ReactJS. Delving into
        Node.js and SQL to become a full-stack developer.
      </p>
      <a className="hero--projects--link" href="#projects">
        Go to my projects
      </a>
      <Social />
    </div>
  );
}

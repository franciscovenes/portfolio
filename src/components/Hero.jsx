import Social from "./Social";
export default function Hero() {
  return (
    <div id="hero" className="hero--container">
      <h1>Francisco&apos;s portfolio</h1>
      <p className="summary">
        Junior full-stack developer (React, Next.js, Node.js, PostgreSQL) with a
        research background in socioenvironmental conflicts. I build and
        self-host web projects for community organisations.
      </p>
      <a className="hero--projects--link" href="#projects">
        Go to my projects
      </a>
      <Social />
    </div>
  );
}

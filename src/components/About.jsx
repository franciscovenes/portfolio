export default function About() {
  return (
    <div id="about" className="about--container">
      <h1 className="section--title">About</h1>
      <div className="about--details">
        <div className="summary">
          <p>
            Full-stack web developer completing a PhD in Sociology. I build and
            deploy web projects for community organisations, from the interface
            to the database and self-managed Debian servers.
          </p>
          <p>
            Experienced in React, Next.js, Node.js, PostgreSQL and the Strapi
            headless CMS. Trained to work independently on long projects,
            analyse data and communicate with non-technical stakeholders. I Work
            in Portuguese, Spanish, English and Italian.
          </p>
          <p>
            I&apos;m open to Job opportunities where I can contribute, learn and
            grow. If you have a good opportunity that matches my skills and
            experience then don&apos;t hesitate to contact me.
          </p>
        </div>

        <a className="about--contact--link" href="/#contact">
          Contact me
        </a>
        <div className="about--skills">
          <h2>My skills</h2>
          <section>
            <h3>Frontend development</h3>
            <ul>
              <li>HTML</li>
              <li>CSS/Sass</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React and React-router</li>
              <li>Next.js</li>
              <li>Git, Gituhb and Forgejo</li>
              <li>Responsive Web Design</li>
              <li>UI design with Figma</li>
            </ul>
          </section>
          <section>
            <h3>Backend development</h3>
            <ul>
              <li>PostgreSQL</li>
              <li>Node.js and Express</li>
              <li>Strapi headless CMS</li>
              <li>Supabase</li>
              <li>API design and implementation</li>
            </ul>
          </section>
          <section>
            <h3>Linux and deployment</h3>
            <ul>
              <li>Debian (desktop and server)</li>
              <li>Command line and basic Bash scripting</li>
              <li>nginx</li>
              <li>PM2 process management</li>
              <li>Webhook-based automated deployment</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

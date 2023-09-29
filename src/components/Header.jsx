import { FiMenu } from "react-icons/fi";
import { useState, useEffect } from "react";
import Fade from "./Fade";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const handleMobileBtn = () => {
    setMobileMenu((prevState) => !prevState);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileMenu(false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="header--container">
      <div className="header--nav">
        <a href="/" className="header--logo--name">
          <img className="header--logo" src="./assets/icon.svg" alt="logo" />
          <h1 className="header--name">Francisco Venes</h1>
        </a>

        <FiMenu onClick={handleMobileBtn} className="header--nav--mobile" />
        <ul className="header--nav--list">
          <li>
            <a className="header--nav--link" href="#hero">
              Home
            </a>
          </li>
          <li>
            <a className="header--nav--link" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="header--nav--link" href="#projects">
              Projects
            </a>
          </li>

          <li>
            <a className="header--nav--link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>

      <Fade show={mobileMenu} setShow={setMobileMenu}>
        <div className="header--mobile--dropdown">
          <ul className="header--mobile--dropdown--list">
            <li>
              <a
                className="animate--fade header--mobile--dropdown--link"
                href="#hero"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="animate--fade header--mobile--dropdown--link"
                href="#about"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="animate--fade header--mobile--dropdown--link"
                href="#projects"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className="animate--fade header--mobile--dropdown--link"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </Fade>
    </header>
  );
}

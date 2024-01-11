import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleMobileBtn = () => {
    setMobileMenu((prevState) => !prevState);
    console.log("Clicked!");
  };

  return (
    <header className="header--container">
      <a href="/" className="header--logo">
        <img src="./assets/icon.svg" alt="logo" />
        <h1>Francisco Venes</h1>
      </a>

      <AiOutlineClose
        onClick={handleMobileBtn}
        className={`header--nav--exit-btn ${
          mobileMenu ? "" : "header--nav--hide-btn"
        }`}
      />

      <FiMenu
        onClick={handleMobileBtn}
        className={`header--nav--open-btn ${
          !mobileMenu ? "" : "header--nav--hide-btn"
        }`}
      />

      <ul className={mobileMenu ? "header--nav--mobile" : ""}>
        <li>
          <a onClick={mobileMenu ? handleMobileBtn : undefined} href="#hero">
            Home
          </a>
        </li>
        <li>
          <a onClick={mobileMenu ? handleMobileBtn : undefined} href="#about">
            About
          </a>
        </li>
        <li>
          <a
            onClick={mobileMenu ? handleMobileBtn : undefined}
            href="#projects"
          >
            Projects
          </a>
        </li>
        <li>
          <a onClick={mobileMenu ? handleMobileBtn : undefined} href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </header>
  );
}

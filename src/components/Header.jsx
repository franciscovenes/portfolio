import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react";
import Fade from "./Fade";
import { useLayoutEffect } from "react";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileUI, setMobileUI] = useState(null);

  console.log(mobileMenu);

  const handleMobileBtn = () => {
    setMobileMenu((prevState) => !prevState);
  };

  useLayoutEffect(() => {
    if (window.innerWidth >= 768) {
      setMobileUI(false);
    } else {
      setMobileUI(true);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileUI(false);
        setMobileMenu(false);
      } else {
        setMobileUI(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (mobileUI === null) return null;

  return (
    <header className="header--container">
      <a href="/" className="header--logo">
        <img src="./assets/icon.svg" alt="logo" />
        <h1>Francisco Venes</h1>
      </a>

      <Fade show={mobileMenu && mobileUI}>
        <AiOutlineClose
          onClick={handleMobileBtn}
          className="header--nav--mobile"
        />
      </Fade>
      <Fade show={!mobileMenu && mobileUI}>
        <FiMenu onClick={handleMobileBtn} className="header--nav--mobile" />
      </Fade>

      <Fade show={(mobileMenu && mobileUI) || !mobileUI}>
        <ul onClick={mobileUI ? handleMobileBtn : () => false}>
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </Fade>
    </header>
  );
}

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
export default function Social() {
  return (
    <ul className="social--container">
      <li>
        <a
          href="https://github.com/franciscovenes"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/francisco-venes-40786313b/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/panchovenes/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>
      </li>
    </ul>
  );
}

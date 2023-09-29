import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
export default function Social() {
  return (
    <ul className="social--container">
      <li>
        <a className="github" href="#" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
      </li>
      <li>
        <a className="linkedin" href="#" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
      </li>
      <li>
        <a className="instagram" href="#" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
      </li>
      <li>
        <a className="twitter" href="#" target="_blank" rel="noreferrer">
          <FaTwitter />
        </a>
      </li>
    </ul>
  );
}

import React from "react"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

const Footer = () => (
  <footer>
    <a href="mailto:dawid.mrozik0@gmail.com" className="footer__link">
      dawid.mrozik0@gmail.com
    </a>
    <ul className="social-list">
      <li className="social-list__item">
        <a className="social-list__link" href="https://github.com/dawidMrozik">
          <FaGithub />
        </a>
      </li>
      <li className="social-list__item">
        <a
          className="social-list__link"
          href="https://www.linkedin.com/in/dawid-mrozik-53b6a91a1/"
        >
          <FaLinkedin />
        </a>
      </li>
      <li className="social-list__item">
        <a
          className="social-list__link"
          href="https://twitter.com/frosty_dawid"
        >
          <FaTwitter />
        </a>
      </li>
    </ul>
  </footer>
)

export default Footer

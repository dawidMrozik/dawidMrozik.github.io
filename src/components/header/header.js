import PropTypes from "prop-types"
import React, { useState } from "react"
import LogoImage from "./LogoImage"
import Nav from "../nav/nav"
import { Link } from "gatsby"

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  return (
    <header>
      <div className="logo">
        <Link to="/">
          <LogoImage />
        </Link>
      </div>
      <button
        className={isNavOpen ? "nav-toggle nav-toggle-open" : "nav-toggle"}
        aria-label="toggle navigation"
        onClick={toggleNav}
      >
        <span
          className={isNavOpen ? "hamburger hamburger-open" : "hamburger"}
        ></span>
      </button>
      <Nav isNavOpen={isNavOpen} toggleNav={toggleNav} />
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

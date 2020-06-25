import React from "react"
import { Link } from "gatsby"

const NavItem = ({ link, name, toggleNav }) => {
  const isExternal = link.startsWith("https://")

  return (
    <li className="nav__item">
      {!isExternal && (
        <Link to={link} className="nav__link" onClick={toggleNav}>
          {name}
        </Link>
      )}
      {isExternal && (
        <a href={link} className="nav__link" onClick={toggleNav}>
          {name}
        </a>
      )}
    </li>
  )
}

export default NavItem

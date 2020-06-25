import React from "react"
import { Link } from "gatsby"

const NavItem = ({ link, name, toggleNav }) => {
  return (
    <li className="nav__item">
      <Link to={link} className="nav__link" onClick={toggleNav}>
        {name}
      </Link>
    </li>
  )
}

export default NavItem

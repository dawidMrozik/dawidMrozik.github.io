import React from "react"
import NavItem from "./navitem"

const Nav = ({ isNavOpen, toggleNav }) => {
  const sections = [
    {
      link: "/#home",
      name: "Home",
    },
    {
      link: "/#services",
      name: "My Services",
    },
    {
      link: "/#about",
      name: "About me",
    },
    {
      link: "/#work",
      name: "My Work",
    },
    {
      link: "/",
      name: "Resume ⭳",
    },
  ]

  return (
    <nav className={isNavOpen ? "nav-open" : null}>
      <ul className="nav__list">
        {sections.map(section => (
          <NavItem
            name={section.name}
            link={section.link}
            toggleNav={toggleNav}
            key={section.name}
          />
        ))}
      </ul>
    </nav>
  )
}

export default Nav

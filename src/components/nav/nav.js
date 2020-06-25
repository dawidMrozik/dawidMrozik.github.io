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
      link:
        "https://drive.google.com/file/d/1TAI_sGLf-c3zReTtORKCjij_fKZNunho/view?usp=sharing",
      name: "Resume (922KB) ⭳",
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

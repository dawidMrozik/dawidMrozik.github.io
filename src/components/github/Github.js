import React from "react"
import { FaGithub } from "react-icons/fa"

const Github = ({ link }) => (
  <a href={link} className="github-link">
    See more on <FaGithub />
  </a>
)

export default Github

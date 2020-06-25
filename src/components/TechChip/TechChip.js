import React from "react"
import {
  FaReact,
  FaCheck,
  FaVuejs,
  FaRocket,
  FaYoutube,
  FaSass,
  FaMarkdown,
  FaFileSignature,
  FaNodeJs,
  FaGoogle,
  FaPhp,
  FaLock,
  FaBook,
  FaPaintBrush,
  FaHtml5,
  FaCss3,
  FaAngular,
} from "react-icons/fa"
import { RiRouteLine } from "react-icons/ri"

const TechChip = ({ tech }) => {
  let techIcon

  switch (tech) {
    case "Redux":
    case "React Native":
    case "React":
      techIcon = { color: "#61dafb", Icon: FaReact }
      break
    case "Vue.js":
    case "Vuex":
      techIcon = { color: "#42b983", Icon: FaVuejs }
      break
    case "Vue Router":
      techIcon = { color: "#42b983", Icon: RiRouteLine }
      break
    case "socket.io":
      techIcon = { color: "#555", Icon: FaRocket }
      break
    case "YouTube Player":
      techIcon = { color: "#c00", Icon: FaYoutube }
      break
    case "SCSS":
      techIcon = { color: "#bf4080", Icon: FaSass }
      break
    case "Gatsby":
      techIcon = { color: "#362066", Icon: FaReact }
      break
    case "Markdown":
      techIcon = { color: "#17a2b8", Icon: FaMarkdown }
      break
    case "BEM":
      techIcon = { color: "#303030", Icon: FaFileSignature }
      break
    case "express":
      techIcon = { color: "#303030", Icon: FaNodeJs }
      break
    case "React-Router":
      techIcon = { color: "#61dafb", Icon: RiRouteLine }
      break
    case "Material Design":
      techIcon = { color: "#555", Icon: FaGoogle }
      break
    case "php":
      techIcon = { color: "#8892BF", Icon: FaPhp }
      break
    case "JWT":
      techIcon = { color: "#d63aff", Icon: FaLock }
      break
    case "storybook":
      techIcon = { color: "#FF2D74", Icon: FaBook }
      break
    case "styled-components":
      techIcon = { color: "#DAA357", Icon: FaPaintBrush }
      break
    case "unit-testing":
      techIcon = { color: "#0e590c", Icon: FaCheck }
      break
    case "HTML":
      techIcon = { color: "#F16529", Icon: FaHtml5 }
      break
    case "CSS":
      techIcon = { color: "#2965f1", Icon: FaCss3 }
      break
    case "Angular":
      techIcon = { color: "#c3002e", Icon: FaAngular }
      break
    default:
      techIcon = { color: "#303030", Icon: FaCheck }
      break
  }

  return (
    <div
      className="tech-chip"
      style={{ backgroundColor: techIcon ? techIcon.color : null }}
    >
      {techIcon && <techIcon.Icon className="tech-chip__icon" />}
      {tech}
    </div>
  )
}

export default TechChip

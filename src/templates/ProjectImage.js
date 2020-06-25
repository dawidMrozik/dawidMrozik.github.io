import React from "react"
import Img from "gatsby-image"

const ProjectImage = ({ img }) => (
  <Img
    fluid={img}
    alt="project screenshot"
    className="portfolio-item-individual__img"
    imgStyle={{ objectFit: "contain" }}
  />
)

export default ProjectImage

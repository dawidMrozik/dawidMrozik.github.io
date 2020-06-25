import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

const Project = ({ data }) => (
  <Link to={data.fields.slug} className="portfolio__item">
    <p className="portfolio__label">{data.frontmatter.fullTitle}</p>
    <Img
      fluid={data.frontmatter.featuredImage.childImageSharp.fluid}
      alt={data.frontmatter.fullTitle}
      className="portfolio__img"
    />
  </Link>
)

export default Project

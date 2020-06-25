import React from "react"
import Img from "gatsby-image"

const Intro = ({ title1, title2, subtitle, img }) => (
  <section className="intro" id="home">
    <h1 className="section__title section__title--intro">
      {title1} <strong>{title2}</strong>
    </h1>
    <p className="section__subtitle section__subtitle--intro">{subtitle}</p>
    <Img fluid={img} className="intro__img" />
  </section>
)

export default Intro

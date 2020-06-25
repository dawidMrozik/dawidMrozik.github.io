import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const Services = () => {
  const data = useStaticQuery(graphql`
    query {
      img: file(relativePath: { eq: "services-bg.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <BackgroundImage
      Tag="section"
      className="my-services"
      id="services"
      fluid={data.img.childImageSharp.fluid}
    >
      <h2 className="section__title section__title--services">What I do</h2>
      <div className="services">
        <div className="service">
          <h3>Frontend</h3>
          <p>
            I use HTML, CSS and JavaScript to produce websites and web apps that
            provide users the best experience. I take the visuals of a web site
            just as seriously as a designer and believe the combination of both
            form and function is what makes a great user experience that
            performs for your business.
          </p>
        </div>

        <div className="service">
          <h3>Knowledge</h3>
          <p>
            I have an eye for detail, appreciation for design, and knowledge of
            integrating with server-side technology. This experience of multiple
            fields allows me to carry out front-end development with the full
            scope of a project in mind simplifying the process of working
            amongst a team.
          </p>
        </div>

        <div className="service">
          <h3>Problem Solving</h3>
          <p>
            I can take vague problems and requirements and break them down into
            steps and solutions. I'm good at thinking abstractly and putting
            together systems with many moving parts. I can self-manage and work
            to deadlines.
          </p>
        </div>
      </div>

      <a href="#work" className="btn">
        My Work
      </a>
    </BackgroundImage>
  )
}

export default Services

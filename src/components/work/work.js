import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Project from "../project/project"

const Work = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              fullTitle
              featuredImage {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <section className="my-work" id="work">
      <h2 className="section__title section__title--work">My work</h2>
      <p className="section__subtitle section__subtitle--work">
        A selection of my range of work
      </p>

      <div className="portfolio">
        {data.allMarkdownRemark.edges.map(project => (
          <Project data={project.node} key={project.node.id} />
        ))}
      </div>
    </section>
  )
}

export default Work

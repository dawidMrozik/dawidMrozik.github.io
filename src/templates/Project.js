import React from "react"
import { graphql } from "gatsby"

import Intro from "../components/intro/intro"
import ProjectImage from "./ProjectImage"
import TechChip from "../components/TechChip/TechChip"
import Github from "../components/github/Github"
import SEO from "../components/seo"
import Layout from "../components/layout"

const Project = ({ data }) => {
  const post = data.markdownRemark
  const {
    title1,
    title2,
    fullTitle,
    mainTech,
    featuredImage,
    overviewImage,
    techs,
    github,
  } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <SEO
        title={`${fullTitle}`}
        description="Dawid Mrozik's portofolio site"
      />
      <Intro
        title1={title1}
        title2={title2}
        subtitle={mainTech}
        img={featuredImage.childImageSharp.fluid}
      />
      <section className="portfolio-item-individual">
        <div className="portfolio-item-individual-description">
          {techs.map(tech => (
            <TechChip tech={tech} />
          ))}

          <div dangerouslySetInnerHTML={{ __html: post.html }} />

          <div className="github-link-container">
            <Github link={github} />
          </div>
        </div>
        {overviewImage && (
          <>
            <h3 className="portfolio-item-individual-overview-title">
              Overview
            </h3>
            <ProjectImage img={overviewImage.childImageSharp.fluid} />
          </>
        )}
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title1
        title2
        fullTitle
        mainTech
        techs
        github
        featuredImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        overviewImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default Project

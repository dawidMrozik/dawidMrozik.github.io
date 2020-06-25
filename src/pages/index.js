import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/about/about"
import Intro from "../components/intro/intro"
import Services from "../components/services/services"
import Work from "../components/work/work"

import "../styles.css"
import { useStaticQuery } from "gatsby"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      img: file(relativePath: { eq: "photo2.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="homepage" description="Dawid Mrozik's portofolio site" />
      <Intro
        title1="Hi I'm"
        title2="Dawid Mrozik"
        subtitle="junior front-end dev"
        img={data.img.childImageSharp.fluid}
      />
      <Services />
      <About />
      <Work />
    </Layout>
  )
}

export default IndexPage

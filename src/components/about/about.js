import React from "react"
import AboutImage from "./AboutImage"

const About = () => (
  <section className="about-me" id="about">
    <h2 className="section__title section__title--about">Who I am</h2>
    <p className="section__subtitle section__subtitle--about">
      Junior front-end developer based out of Munich
    </p>

    <div className="about-me__body">
      <p>
        I'm freshly graduated IT engineer with a specialization of Web
        applications. I like to code things from scratch, and enjoy bringing
        ideas to life in the browser. I'm well-organised and hard-working person
        who likes challenges and working with others. I love sharing my
        knowledge with teammates as well as learnig from them.
      </p>
    </div>

    <AboutImage />
  </section>
)

export default About

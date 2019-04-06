import PropTypes from "prop-types"
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

const Hero = ({ pageTitle, pageSubtitle, height, children }) => (
  <StaticQuery
    query={graphql`
      query {
        bgimage: file(relativePath: { eq: "toppic.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => (
      <section className="hero" style={{height}}>
        <BackgroundImage
          className="hero-blur"
          fluid={data.bgimage.childImageSharp.fluid}
          style={{ position: `absolute` }}
          backgroundColor="#10457E"
        />
        {children || <>
          <h2>
            {pageTitle}
          </h2>
          <p className="subtitle">
            {pageSubtitle}
          </p>
        </>}
      </section>
    )}
  />
)

Hero.propTypes = {
  pageTitle: PropTypes.string,
  pageSubtitle: PropTypes.string,
  height: PropTypes.string,
  children: PropTypes.node,
}

Hero.defaultProps = {
  pageTitle: ``,
  pageSubtitle: ``,
  height: `200px`,
}

export default Hero

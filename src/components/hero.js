import PropTypes from "prop-types"
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

const Hero = ({ pageTitle, pageSubtitle, className, children }) => (
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
      <section className={`hero ${className || ``}`}>
        <Img
          className="hero-blur"
          fluid={data.bgimage.childImageSharp.fluid}
          objectFit="cover"
          objectPosition="50% 50%"
        />
        {children || (
          <>
            <h2>{pageTitle}</h2>
            <p className="subtitle">{pageSubtitle}</p>
          </>
        )}
      </section>
    )}
  />
)

Hero.propTypes = {
  pageTitle: PropTypes.string,
  pageSubtitle: PropTypes.string,
  height: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
}

Hero.defaultProps = {
  pageTitle: ``,
  pageSubtitle: ``,
}

export default Hero

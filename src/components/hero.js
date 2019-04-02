import PropTypes from "prop-types"
import React from "react"

const Hero = ({ pageTitle, pageSubtitle, height, children }) => (
  <section className="hero" style={{height}}>
    {children || <>
      <h2>
        {pageTitle}
      </h2>
      <p className="subtitle">
        {pageSubtitle}
      </p>
    </>}
  </section>
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

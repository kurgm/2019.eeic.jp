import { Link, StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <StaticQuery
    query={graphql`
      query {
        iconImage: file(relativePath: { eq: "eeic-black.png" }) {
          childImageSharp {
            fixed(height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data =>
      <header>
        <div>
          <h1>
            <Link to="/">
              <Img
                fixed={data.iconImage.childImageSharp.fixed}
                className="header-icon"
              />
              <div>
                {siteTitle}
              </div>
            </Link>
          </h1>
          <nav>
            <Link to="/page-2/">
              Page two
            </Link>
            <Link to="/page-2/">
              Page two
            </Link>
            <Link to="/page-2/">
              Page two
            </Link>
            <Link to="/page-2/">
              Page two
            </Link>
          </nav>
        </div>
      </header>
    }
  />
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

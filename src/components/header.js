import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <h1>
        <Link to="/">
          {siteTitle}
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
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

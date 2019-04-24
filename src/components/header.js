import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { ReactComponent as BulbBlack } from "../images/bulb-black.svg"

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <div className="header-logo-container">
        <Link to="/">
          <div className="header-logo">
            <BulbBlack className="header-icon" height="45" />
            <h1>{siteTitle}</h1>
          </div>
        </Link>
      </div>
      <nav>
        <Link to="/exhibition/">Exhibition</Link>
        <Link to="/workshop/">Workshop</Link>
        <Link to="/vtuber/">VTuber</Link>
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

import React from "react"
import PropTypes from "prop-types"

const LocationBlock = ({ name }) => (
  <span className="location-block-wrapper">
    <span className="location-block">
      <span
        className="location-block-inner"
        style={name.length >= 3 ? { letterSpacing: `-0.1rem` } : {}}
      >
        {name}
      </span>
    </span>
  </span>
)

LocationBlock.propTypes = {
  name: PropTypes.string.isRequired,
}

export default LocationBlock

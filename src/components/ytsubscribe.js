import React from "react"

class YTSubscribe extends React.Component {
  containerRef = React.createRef()
  componentDidMount() {
    if (window.gapi) {
      window.gapi.ytsubscribe.go(this.containerRef.current)
    }
  }
  render() {
    return (
      <span ref={this.containerRef}>
        <div className="g-ytsubscribe" {...this.props} />
      </span>
    )
  }
}

export default YTSubscribe

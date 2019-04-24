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
      <div ref={this.containerRef} style={{ display: `inline-block` }}>
        <div className="g-ytsubscribe" {...this.props} />
      </div>
    )
  }
}

export default YTSubscribe

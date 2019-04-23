import React from "react"

class TwitterFollow extends React.Component {
  containerRef = React.createRef()
  componentDidMount() {
    if (window.twttr) {
      window.twttr.widgets.load(this.containerRef.current)
    }
  }
  render() {
    return (
      <span ref={this.containerRef}>
        <a className="twitter-follow-button" {...this.props}>
          {this.props.children}
        </a>
      </span>
    )
  }
}

export default TwitterFollow

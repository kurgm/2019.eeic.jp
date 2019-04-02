import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby";

const Section = ({ headImage, photos, children }) => (
  <section className="content">
    {headImage && <Img fixed={headImage.childImageSharp.fixed} className="content-image" />}
    <div className="content-desc">
      {children}
    </div>
    {photos && photos.length !== 0 && <div className="content-photos">
      <div>
        {photos.map(({title, imageFixed}) => <div>
          <div><Img fixed={imageFixed} /></div>
          <div>{title}</div>
        </div>)}
      </div>
    </div>}
  </section>
)

Section.propTypes = {
  headImage: PropTypes.any,
  photos: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    imageFixed: PropTypes.any,
  })),
  children: PropTypes.node,
}

export default Section

export const query = graphql`
  fragment SectionHeadImage on File {
    childImageSharp {
      fixed(width: 130, height: 130) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  fragment ContentPhotoImage on File {
    childImageSharp {
      fixed(width: 400, height: 300) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`

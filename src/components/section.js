import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"

const Section = ({ headImage, photos, children }) => (
  <section className="content">
    {headImage && <Img fixed={headImage.childImageSharp.fixed} className="content-image" />}
    <div className="content-desc">
      {children}
    </div>
    {photos && photos.length !== 0 && <div className="content-photos">
      <div>
        {photos.map(({title, image}, i) => <div key={i}>
          <div>
            <Img
              fixed={image.childImageSharp.fixed}
              objectFit="cover"
              objectPosition="50% 50%"
            />
          </div>
          {title && <div>{title}</div>}
        </div>)}
      </div>
    </div>}
  </section>
)

Section.propTypes = {
  headImage: PropTypes.any,
  photos: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.any.isRequired,
  })),
  children: PropTypes.node,
}

export default Section

export const query = graphql`
  fragment SectionHeadImage on File {
    childImageSharp {
      fixed(width: 180, height: 180) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  fragment ContentPhotoImage on File {
    childImageSharp {
      fixed(width: 300, height: 225) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`

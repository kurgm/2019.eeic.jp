import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"

const Section = ({ headImage, photos, children, id }) => (
  <section className="content" {...(id ? { id } : {})}>
    {headImage && (
      <Img fixed={headImage.childImageSharp.fixed} className="content-image" />
    )}
    <div className="content-desc">{children}</div>
    {photos && photos.length !== 0 && (
      <div className="content-photos">
        <div>
          {photos.map(({ title, image }, i) => (
            <div key={i}>
              <div>
                <Img fixed={image.childImageSharp.fixed} />
              </div>
              {title && <div>{title}</div>}
            </div>
          ))}
        </div>
      </div>
    )}
  </section>
)

Section.propTypes = {
  headImage: PropTypes.any,
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      image: PropTypes.any.isRequired,
    })
  ),
  children: PropTypes.node,
  id: PropTypes.string,
}

export default Section

export const query = graphql`
  fragment SectionHeadImage on File {
    childImageSharp {
      fixed(width: 180, height: 180, cropFocus: CENTER) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  fragment ContentPhotoImage on File {
    childImageSharp {
      fixed(width: 300, height: 225, cropFocus: CENTER) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`

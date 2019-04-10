import React from "react"
// import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Section from "../components/section"

const VTuberPage = ({ data }) => (
  <Layout>
    <SEO title="バーチャルYouTuber企画" />
    <Hero
      pageTitle="バーチャルYouTuber企画"
      pageSubtitle="Virtual YouTuber"
      className="long-hero"
    />
    <Section>
      <h3>VTuber体験</h3>
      <dl>
        <dt>場所</dt>
        <dd>
          工学部2号館4階244号講義室
          <br />
          工学部2号館11階電気系会議室6・7
          <br />
          工学部2号館12階電気系会議室4
        </dd>
      </dl>
    </Section>
  </Layout>
)

// export const query = graphql`
//   query {
//     vtuberHeadImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
//       ...SectionHeadImage
//     }
//   }
// `

export default VTuberPage

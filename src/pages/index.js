import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Section from "../components/section"

const IndexPage = ({data}) => (
  <Layout>
    <SEO keywords={[`近未来体験`, `五月祭`, `EEIC`, `電子情報工学科`, `電気電子工学科`, `東京大学`, `電子工作`, `プログラミング`, `VTuber`]} />
    <Hero height="400px">
      <p>東京大学工学部 電子情報工学科・電気電子工学科 五月祭展示</p>
      <h2>近未来体験2019</h2>
    </Hero>
    <Section>
      <h2>About</h2>
      <p>
        「近未来体験2019」とは、
      </p>
    </Section>
    <Section>
      <h2>Contents</h2>
      <div className="hori-sections">
        <Section headImage={data.headImage}>
          <h3>aa</h3>
        </Section>
        <Section headImage={data.headImage}>
          <h3>bb</h3>
        </Section>
        <Section headImage={data.headImage}>
          <h3>cc</h3>
        </Section>
      </div>
    </Section>
  </Layout>
)

export const query = graphql`
  query IndexPageQuery {
    headImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
      ...SectionHeadImage
    }
  }
`

export default IndexPage

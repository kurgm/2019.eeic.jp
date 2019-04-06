import React from "react"
import { graphql, Link } from "gatsby"

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
        <Link to="/exhibition/" className="block-link">
          <Section headImage={data.headImage}>
            <h3>展示</h3>
            <p>
              学生制作物展示ではEEICの学生が授業で作成した面白いメカを展示します。研究室展示ではEEICで行われる最先端の研究についてわかりやすくご紹介します。
            </p>
          </Section>
        </Link>
        <Link to="/workshop/" className="block-link">
          <Section headImage={data.headImage}>
            <h3>ワークショップ</h3>
            <p>
              電子工作教室、プログラミング教室の2つのワークショップを設けています。理系の中でも工学部、とりわけEEICでは「モノを創る」ことに重きを置いています。それぞれのワークショップで物作りという学校の勉強とは趣の異なる体験を子どもも大人の方もお楽しみください。
            </p>
          </Section>
        </Link>
        <Link to="/exhibition/" className="block-link">
          <Section headImage={data.headImage}>
            <h3>cc</h3>
          </Section>
        </Link>
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

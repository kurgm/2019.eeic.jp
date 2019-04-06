import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Section from "../components/section"
import { indexByFilename } from "../utils"

const ExhibitionPage = ({data}) => {
  const bdmPhotoMap = indexByFilename(data.bdmPhotos)
  return <Layout>
    <SEO title="展示" />
    <Hero pageTitle="展示" pageSubtitle="Exhibition" />
    <Section
      headImage={data.bdmHeadImage}
      photos={bdmWorks.map(title => ({ title, image: bdmPhotoMap[title] }))}
    >
      <h3>学生制作物展示</h3>
      <p>
        電子情報・電気電子工学科には『電子情報機器学』という毎年恒例の名物授業があり、「何か一つ、面白いメカを作りなさい」という課題を渡され、学生たちは寝る間も惜しんでメカの制作に取り組みます。ここでは、最終授業で行われた発表会で特に優秀と認められた作品を展示いたします。
      </p>
      <p>
        展示とは言っても、制作された作品たちを実際に動かして体験できるので子どもから大人まで幅広く楽しんでいただけます。
      </p>
      <p>
        学生の柔軟な発想と高度な技術力に触れてみてはいかがでしょうか？
      </p>
      <dl>
        <dt>場所</dt>
        <dd>工学部2号館4階241号講義室</dd>
        <dt>時間</dt>
        <dd>9:00-18:00</dd>
      </dl>
    </Section>
  </Layout>
}

const bdmWorks = [
  `コナン式スケボー`,
  `じゃんけんマシン`,
  `消耗品の重さを量ってくれるくん`,
  `ひらめき`,
  `Cycholock`,
  `カード判別器`,
  `きわめて簡単な電子工作`,
  `スマートポスト`,
  `Bonsai`,
]

export const query = graphql`
  query {
    bdmHeadImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
      ...SectionHeadImage
    }
    bdmPhotos: allFile(filter: {relativeDirectory: {eq: "bdm"}}) {
      edges {
        node {
          name
          ...ContentPhotoImage
        }
      }
    }
  }
`

export default ExhibitionPage

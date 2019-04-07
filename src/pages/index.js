import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Section from "../components/section"
import { indexByFilename } from "../utils"

const IndexPage = ({data}) => {
  const linkImageMap = indexByFilename(data.linkImage)
  return (
    <Layout>
      <SEO keywords={[`近未来体験`, `五月祭`, `EEIC`, `電子情報工学科`, `電気電子工学科`, `東京大学`, `電子工作`, `プログラミング`, `VTuber`]} />
      <Hero height="400px">
        <p>東京大学工学部 電子情報工学科・電気電子工学科 五月祭展示</p>
        <h2>近未来体験2019</h2>
      </Hero>
      <Section>
        <h2>About</h2>
        <p>
          「近未来体験2019」は電子情報工学科・電気電子工学科の学生が主催する五月祭展示企画のことです。 幅広い分野の最先端の研究や、学生がオリジナルに制作したメカやゲームを見て聞いて体験していただけます。
        </p>
        <p>
          電気・電子・情報に興味のある大学生や高校生はもちろん、「東大の学問・研究を感じたい」という大人の方、「なにか五月祭で面白い体験をしたい」という家族連れ、小中学生も大歓迎です♪
        </p>
        <p>
          ぜひとも気軽にご来場ください！
        </p>
        <dl>
          <dt>日時</dt><dd>5/18(土)、5/19(日) 9:00-18:00</dd>
          <dt>場所</dt><dd>
            東京大学本郷キャンパス
            <br/>
            工学部2号館2階フォーラム2階フォーラム（案内デスク）
          </dd>
        </dl>
      </Section>
      <Section>
        <h2>企画</h2>
        <div className="hori-sections">
          <Link to="/exhibition/" className="block-link">
            <Section headImage={data.exhibitionImage}>
              <h3>展示</h3>
              <p>
                学生制作物展示ではEEICの学生が授業で作成した面白いメカを展示します。研究室展示ではEEICで行われる最先端の研究についてわかりやすくご紹介します。
              </p>
            </Section>
          </Link>
          <Link to="/workshop/" className="block-link">
            <Section headImage={data.workshopImage}>
              <h3>ワークショップ</h3>
              <p>
                電子工作教室、プログラミング教室の2つのワークショップを設けています。理系の中でも工学部、とりわけEEICでは「モノを創る」ことに重きを置いています。それぞれのワークショップで物作りという学校の勉強とは趣の異なる体験を子どもも大人の方もお楽しみください。
              </p>
            </Section>
          </Link>
          <Link to="/vtuber/" className="block-link">
            <Section>
              <h3>VTuber</h3>
            </Section>
          </Link>
        </div>
      </Section>
      <Section>
        <h2>アクセス</h2>
        <dl>
          <dt>会場</dt><dd>
            東京大学本郷キャンパス 工学部2・3・13号館
            <br/>
            本郷三丁目駅から徒歩17分
            <br/>
            東大前駅から徒歩8分
            <br/>
            根津駅から徒歩7分
          </dd>
        </dl>
        <div>
          <iframe
            title="東京大学本郷キャンパス 工学部2・3・13号館"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.486358958482!2d139.76097665805472!3d35.71474799504667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQyJzUzLjEiTiAxMznCsDQ1JzQzLjUiRQ!5e0!3m2!1sja!2sjp!4v1554554790604!5m2!1sja!2sjp"
            className="gmap"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </Section>
      <Section>
        <h2>リンク</h2>
        <div className="ext-link">
          <a href="http://ut-mech.com/2018/" className="block-link">
            <div>
              <Img
                fixed={linkImageMap.mech.childImageSharp.fixed}
                className="extlink-image"
              />
            </div>
            <div className="extlink-title">
              工学部機械工学科・機械情報工学科
            </div>
          </a>
        </div>
      </Section>
    </Layout>
  )
}

export const query = graphql`
  query {
    exhibitionImage: file(relativePath: { eq: "lab/kawahara.jpg" }) {
      ...SectionHeadImage
    }
    workshopImage: file(relativePath: { eq: "workshop/programming.jpg" }) {
      ...SectionHeadImage
    }
    # vtuberImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
    #   ...SectionHeadImage
    # }
    linkImage: allFile(filter: {relativeDirectory: {eq: "link"}}) {
      edges {
        node {
          name
          childImageSharp {
            fixed(width: 300) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`

export default IndexPage

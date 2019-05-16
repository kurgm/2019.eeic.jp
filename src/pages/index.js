import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Section from "../components/section"
// import { indexByFilename } from "../utils"
import { ReactComponent as BulbWhite } from "../images/bulb-white.svg"
import { ReactComponent as MechLogo } from "../images/link/mech.svg"
import { ReactComponent as LineLogo } from "../images/line_a.svg"

const IndexPage = ({ data }) => {
  // const linkImageMap = indexByFilename(data.linkImage)
  return (
    <Layout>
      <SEO
        keywords={[
          `近未来体験2019`,
          `近未来体験`,
          `五月祭`,
          `EEIC`,
          `電子情報工学科`,
          `電気電子工学科`,
          `東京大学`,
          `工学部`,
          `電気系`,
          `電子情報機器学`,
          `電子工作`,
          `プログラミング`,
          `VTuber`,
          `バーチャルYouTuber`,
          `御城みつき`,
          `風里えれな`,
          `VR`,
          `AR`,
          `mitsuele_eeic`,
          `eeic_studentadv`,
        ]}
      />
      <Hero className="index-hero">
        <div className="index-logo">
          <BulbWhite height="90" />
        </div>
        <p>
          東京大学工学部
          <br className="mobile-on" />
          {` `}
          電子情報工学科・電気電子工学科
          <br className="mobile-on" />
          {` `}
          五月祭展示
        </p>
        <h2>
          近未来体験
          <br className="narrow-on" />
          2019
        </h2>
      </Hero>
      <Section id="about">
        <h2>About</h2>
        <p>
          「近未来体験2019」は電子情報工学科・電気電子工学科の学生が主催する
          <br className="middle-on" />
          五月祭展示企画のことです。
          <br className="mobile-off" />
          幅広い分野の最先端の研究や、学生がオリジナルに制作したメカやゲームを
          <br className="middle-on" />
          見て聞いて体験していただけます。
        </p>
        <p>
          電気・電子・情報に興味のある大学生や高校生はもちろん、
          <br className="middle-on" />
          「東大の学問・研究を感じたい」という大人の方、
          <br className="mobile-off" />
          「なにか五月祭で面白い体験をしたい」という家族連れ、
          <br className="middle-on" />
          小中学生も大歓迎です♪
        </p>
        <p>ぜひとも気軽にご来場ください！</p>
        <dl>
          <dt>日時</dt>
          <dd>5/18(土)、5/19(日) 9:00-18:00</dd>
          <dt>場所</dt>
          <dd>
            東京大学本郷キャンパス
            <br />
            工学部2号館2階フォーラム
            <br className="narrow-on" />
            （案内デスク）
          </dd>
        </dl>
      </Section>
      <Section id="contents">
        <h2>企画</h2>
        <div className="hori-sections">
          <Link to="/exhibition/" className="block-link">
            <Section headImage={data.exhibitionImage}>
              <h3>展示</h3>
              <p>
                学生制作物展示ではEEICの学生が授業で制作したオリジナリティあふれるメカを展示します。研究室展示ではEEICで行われる最先端の研究や技術について、実際に体験していただきながらわかりやすくご紹介します。
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
            <Section headImage={data.vtuberImage}>
              <h3>バーチャルYouTuber企画</h3>
              <p>
                バーチャルYouTuber企画では、みつきとえれなと一緒にバーチャルの世界を味わうことができます。さまざまな催しや動画の放映、背景技術の解説展示も楽しめるほか、グッズの販売も行っていますので、少し覗いてみるのも大歓迎です。
              </p>
            </Section>
          </Link>
        </div>
      </Section>
      <Section id="access">
        <h2>アクセス</h2>
        <dl>
          <dt>会場</dt>
          <dd>
            東京大学本郷キャンパス
            <br className="narrow-on" />
            {` `}
            工学部2・3・13号館
            <br />
            本郷三丁目駅から徒歩13分
            <br />
            東大前駅から徒歩9分
            <br />
            根津駅から徒歩9分
          </dd>
        </dl>
        <div>
          <iframe
            title="東京大学本郷キャンパス 工学部2・3・13号館"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.486358958482!2d139.76097665805472!3d35.71474799504667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQyJzUzLjEiTiAxMznCsDQ1JzQzLjUiRQ!5e0!3m2!1sja!2sjp!4v1554554790604!5m2!1sja!2sjp"
            className="gmap"
            allowFullScreen
          />
        </div>
      </Section>
      <Section id="sponsor">
        <h2>協賛</h2>
        <a
          href="https://linecorp.com/"
          className="block-link"
          style={{ padding: `0 1rem 1px` }}
        >
          <div>
            <LineLogo className="ext-logo" width="300" />
          </div>
          <p>
            LINE株式会社は、コミュニケーションアプリ「LINE」を機軸に、
            <br className="mobile-off" />
            各種モバイルサービスや広告事業、Fintech事業、AI事業を展開しています。
            <br className="mobile-off" />
            ミッションに「CLOSING THE DISTANCE」を掲げ、
            <br className="mobile-off" />
            世界中の人と人、人と情報・サービスとの距離を縮めることを目指しています。
          </p>
        </a>
      </Section>
      <Section id="vote">
        <h2>投票</h2>
        <p>
          近未来体験2019は、五月祭の人気企画投票「May Fes.
          Awards」に参加しています。
          <br className="mobile-off" />
          ぜひ近未来体験2019への投票をお願いします！　
          <br className="mobile-off" />
          <Link to="/vote/">投票方法の詳細はこちらをご覧ください。</Link>
        </p>
      </Section>
      <Section id="links">
        <h2>リンク</h2>
        <div className="ext-link">
          <a
            href="http://ut-mech.com/"
            className="block-link"
            style={{ margin: `0 auto`, padding: `1rem` }}
          >
            <div>
              <MechLogo className="ext-logo" width="300" />
            </div>
            <div className="ext-title">工学部機械工学科・機械情報工学科</div>
          </a>
        </div>
      </Section>
    </Layout>
  )
}

export const query = graphql`
  query {
    exhibitionImage: file(relativePath: { eq: "lab.jpg" }) {
      ...SectionHeadImage
    }
    workshopImage: file(relativePath: { eq: "workshop.jpg" }) {
      ...SectionHeadImage
    }
    vtuberImage: file(relativePath: { eq: "vtuber.png" }) {
      ...SectionHeadImage
    }
    # linkImage: allFile(filter: { relativeDirectory: { eq: "link" } }) {
    #   edges {
    #     node {
    #       name
    #       childImageSharp {
    #         fixed(width: 300) {
    #           ...GatsbyImageSharpFixed
    #         }
    #       }
    #     }
    #   }
    # }
  }
`

export default IndexPage

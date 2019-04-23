import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Section from "../components/section"
import { indexByFilename } from "../utils"
import YTSubscribe from "../components/ytsubscribe"
import TwitterFollow from "../components/twttrfollow"

const VTuberPage = ({ data }) => {
  const photoMap = indexByFilename(data.photos)
  return (
    <Layout>
      <SEO
        title="バーチャルYouTuber企画"
        pathname="/vtuber"
        keywords={[
          `VTuber`,
          `バーチャルYouTuber`,
          `御城みつき`,
          `風里えれな`,
          `mitsuele_eeic`,
          `近未来体験2019`,
          `近未来体験`,
          `五月祭`,
          `EEIC`,
          `電子情報工学科`,
          `電気電子工学科`,
          `東京大学`,
          `工学部`,
          `電気系`,
          `eeic_studentadv`,
        ]}
        description="バーチャルYouTuber企画では、みつきとえれなと一緒にバーチャルの世界を味わうことができます。"
      />
      <Hero
        pageTitle="バーチャルYouTuber企画"
        pageSubtitle="Virtual YouTuber"
        className="long-hero"
      />
      <Section
        headImage={data.vtuberHeadImage}
        photos={[
          { title: `VRキャンパスツアー`, image: photoMap.VR },
          {
            title: `バーチャルYouTuberと話そう`,
            image: photoMap.バーチャルYouTuberと話そう,
          },
          { title: `ARチェキ会`, image: photoMap.AR },
          { title: `“中の人”体験`, image: photoMap.中の人体験 },
        ]}
      >
        <h3>バーチャルYouTuber企画</h3>
        <p>
          バーチャルYouTuber企画では、みつきとえれなと一緒にバーチャルの世界を味わうことができます。VR上で東京大学の中を巡れる「VRキャンパスツアー」、一緒に写真を撮れる「ARチェキ会」、自分に合わせてキャラクターが動くのを体感できる「“中の人”体験」、時刻限定で開催される「バーチャルYouTuberと話そう」をはじめ、いろんな催しがあります。2人の動画の放映やバーチャルYouTuberの背景にある技術を解説する展示も楽しめるほか、グッズの販売も行っていますので、少し覗いてみるのも大歓迎です。是非いらしてください！
        </p>
        <p>
          みつえれチャンネルのYouTubeチャンネルとTwitterもよろしくお願いします！
        </p>
        <div>
          <YTSubscribe
            data-channelid="UCWPrxA-tgo7ePClMeZhMn0g"
            data-layout="full"
          />
          <br />
          <TwitterFollow
            href="https://twitter.com/mitsuele_eeic?ref_src=twsrc%5Etfw"
            data-size="large"
            data-dnt="true"
            data-show-count="false"
          >
            Follow @mitsuele_eeic
          </TwitterFollow>
        </div>
        <dl>
          <dt>場所</dt>
          <dd>
            工学部2号館4階244号講義室
            <br />
            工学部2号館11階電気系会議室6・7
            <br />
            工学部2号館12階電気系会議室4
          </dd>
          <dt>時間</dt>
          <dd>
            9:00〜18:00
            <br />
            <small>
              ※バーチャルYouTuberと話そう：12:00～、14:00～、16:00～で各回30分ほどの予定です。
            </small>
          </dd>
        </dl>
      </Section>
    </Layout>
  )
}

export const query = graphql`
  query {
    vtuberHeadImage: file(relativePath: { eq: "vtuber.png" }) {
      ...SectionHeadImage
    }
    photos: allFile(filter: { relativeDirectory: { eq: "vtuber" } }) {
      edges {
        node {
          name
          ...ContentPhotoImage
        }
      }
    }
  }
`

export default VTuberPage

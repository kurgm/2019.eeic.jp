import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Section from "../components/section"
import { indexByFilename } from "../utils"

const VTuberPage = ({ data }) => {
  const photoMap = indexByFilename(data.photos)
  return (
    <Layout>
      <SEO title="バーチャルYouTuber企画" />
      <Hero
        pageTitle="バーチャルYouTuber企画"
        pageSubtitle="Virtual YouTuber"
        className="long-hero"
      />
      <Section headImage={data.vtuberHeadImage}>
        <h3>244教室</h3>
        <p>
          ここではバーチャルYouTuberの世界を少しだけ皆さんにお見せします。バーチャルYouTuberのみつきとえれなの姿を、一休みついでに見ていってあげてはどうでしょうか。2人の動画の上映、バーチャルYouTuberにまつわる技術を開設する展示、グッズの販売が楽しめます。
        </p>
        <dl>
          <dt>場所</dt>
          <dd>工学部2号館4階244号講義室</dd>
        </dl>
      </Section>
      <Section>
        <h3>VRキャンパスツアー</h3>
        <p>
          VRグラスをかぶることで、VR上で東京大学のキャンパスツアーに出かけていただきます。ガイドとしてバーチャルYouTuberのみつきとえれなが、東京大学の建物や歴史について教えてくれるようです。自分が行きたいコースを選び、彼らと一緒に出かけましょう！
        </p>
        <dl>
          <dt>場所</dt>
          <dd>工学部2号館11階電気系会議室6・7</dd>
        </dl>
      </Section>
      <Section
        headImage={data.vtuberHeadImage}
        photos={[
          {
            title: `バーチャルYouTuberと話そう`,
            image: photoMap.バーチャルYouTuberと話そう,
          },
          { title: `“中の人”体験`, image: photoMap.中の人体験 },
        ]}
      >
        <h3>12F</h3>
        <p>
          バーチャルYouTuberのみつきとえれなと一緒に、彼らの世界を味わうことができるのがこの部屋です。一緒に写真を撮れる「ARチェキ会」、自分に合わせてキャラクターが動くのを体感できる「“中の人”体験」、さらに時間帯によって「バーチャルYouTuberと話そう」も開催されています。その他にも、バーチャルYouTuberの背景にある技術を解説する展示やグッズの販売も行っていますよ。
        </p>
        <dl>
          <dt>場所</dt>
          <dd>工学部2号館12階電気系会議室4</dd>
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

import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Section from "../components/section"
import { indexByFilename } from "../utils"
import YTSubscribe from "../components/ytsubscribe"
import TwitterFollow from "../components/twttrfollow"
import LocationBlock from "../components/location-block"

const VTuberPage = ({ data }) => {
  const photoMap = indexByFilename(data.photos)
  return (
    <Layout>
      <SEO
        title="バーチャルYouTuber企画"
        pathname="/vtuber/"
        keywords={[
          `VTuber`,
          `バーチャルYouTuber`,
          `御城みつき`,
          `風里えれな`,
          `mitsuele_eeic`,
          `VR`,
          `AR`,
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
        id="vtuber"
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
          みつきとえれなのYouTubeチャンネルとTwitter、
          <a
            href="https://line.me/S/sticker/7523153"
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            LINEスタンプ
          </a>
          もよろしくお願いします！
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
            <LocationBlock name="E6" /> 工学部2号館4階244号講義室
            <br />
            <LocationBlock name="E8" /> 工学部2号館11階電気系会議室6・7
            <br />
            <LocationBlock name="E9" /> 工学部2号館12階電気系会議室4
          </dd>
          <dt>時間</dt>
          <dd>
            9:00〜18:00
            <br />
            <small>
              ※バーチャルYouTuberと話そう：12:00～、14:00～、16:00～で各回30分ほどの予定です。
            </small>
            <br />
            <small>※ARチェキ会：13:00～、15:00～、17:00～の予定です。</small>
          </dd>
        </dl>
        <p>
          <small>
            ※VRキャンパスツアーは整理券制となっております。体験をご希望の方はお早めに工学部2号館11階にお越しください。
            <br />
            また、整理券の配布情報を
            <a
              href="https://twitter.com/eeic_studentadv"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Twitter @eeic_studentadv
            </a>
            で発信しておりますので、チェックしてください！
            <br />
            ※VRキャンパスツアーは、整理券に記載の時刻に遅れますとプレイができない可能性があります。工学部2号館のエレベータは混雑が予想されますので、時間に余裕を持ってご来場ください。
          </small>
        </p>
      </Section>
      <Section
        id="goods"
        headImage={data.goodsHeadImage}
        photos={[
          { title: `Tシャツ（えれな）`, image: photoMap.shirt_e },
          { title: `Tシャツ（みつき）`, image: photoMap.shirt_m },
          { title: `キーホルダー`, image: photoMap.keyholder },
          { title: `ステッカー`, image: photoMap.sticker },
          { title: `しおり`, image: photoMap.bookmark },
        ]}
      >
        <h3>グッズ販売</h3>
        <p>
          みつきとえれなのグッズを販売しております。ぜひお買い求めください。
        </p>
        <p>
          Tシャツ（S, M, L）：2500円
          <br />
          キーホルダー：300円
          <br />
          ステッカー：100円
          <br />
          しおり：100円
        </p>
        <dl>
          <dt>場所</dt>
          <dd>
            <LocationBlock name="E6" /> 工学部2号館4階244号講義室
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
    goodsHeadImage: file(relativePath: { eq: "vtuber/keyholder.png" }) {
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

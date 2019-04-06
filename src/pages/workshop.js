import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Section from "../components/section"
import { indexByFilename } from "../utils"

const WorkshopPage = ({data}) => {
  const photoMap = indexByFilename(data.photos)
  return <Layout>
    <SEO title="ワークショップ" />
    <Hero pageTitle="ワークショップ" pageSubtitle="Workshop" />
    <Section
      headImage={data.progHeadImage}
      photos={[
        { image: photoMap.programming },
        { image: photoMap.programming2 },
      ]}
    >
      <h3>プログラミング教室</h3>
      <p>
        ゲームで遊びながら楽しくプログラミングの基礎を勉強しよう！！
      </p>
      <p>
        アイテムを駆使しながらキャラクターを縦横無尽に動かしてダンジョンを攻略♪
      </p>
      <p>
        君はどのレベルまでクリアできるかな？
      </p>
      <dl>
        <dt>場所</dt>
        <dd>工学部2号館4階241号講義室</dd>
        <dt>時間</dt>
        <dd>9:00-18:00</dd>
      </dl>
      <small>
        ※午後は混雑が予想されるので、午前中の来場をおすすめします。
        <br/>
        ※こちらは中学生くらいまでのプログラミング初心者が対象です。
      </small>
    </Section>
    <Section
      headImage={data.eworkHeadImage}
      photos={[
        { image: photoMap.ework1 },
        { image: photoMap.ework2 },
        { image: photoMap.ework3 },
      ]}
    >
      <h3>電子工作教室</h3>
      <p>
        毎年好評をいただいております電子工作教室、今年もまた新たにオリジナル電子工作キットを用意しました。
      </p>
      <p>
        回路図、配線図共に学生の手作りです。
      </p>
      <p>
        初級・中級・上級の3種類の難易度を用意しており、学生が丁寧にサポートいたしますので、小中学生の初心者から電子工作経験者まで幅広い方に楽しんでいただける内容となっています。
      </p>
      <p>
        複数人での制作も歓迎ですので、この機会に一緒に「メカ」を作って友達・親子の絆を深めてはいかがでしょうか？
      </p>
      <dl>
        <dt>場所</dt>
        <dd>
          工学部2号館4階電気系学生実験室41A
        </dd>
        <dt>時間</dt>
        <dd>9:00-18:00</dd>
      </dl>
      <small>
        ※キット売り切れの場合がございますので、早めの来場をおすすめします。
      </small>
    </Section>
  </Layout>
}

export const query = graphql`
  query {
    progHeadImage: file(relativePath: { eq: "workshop/programming2.png" }) {
      ...SectionHeadImage
    }
    eworkHeadImage: file(relativePath: { eq: "workshop/ework3.png" }) {
      ...SectionHeadImage
    }
    photos: allFile(filter: {relativeDirectory: {eq: "workshop"}}) {
      edges {
        node {
          name
          ...ContentPhotoImage
        }
      }
    }
  }
`

export default WorkshopPage

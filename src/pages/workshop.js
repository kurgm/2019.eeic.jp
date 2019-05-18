import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Section from "../components/section"
import { indexByFilename } from "../utils"
import LocationBlock from "../components/location-block"

const WorkshopPage = ({ data }) => {
  const photoMap = indexByFilename(data.photos)
  return (
    <Layout>
      <SEO
        title="ワークショップ"
        pathname="/workshop/"
        keywords={[
          `電子工作`,
          `プログラミング`,
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
        description="電子工作教室、プログラミング教室の2つのワークショップを設けています。物作りという学校の勉強とは趣の異なる体験をお楽しみください。"
      />
      <Hero pageTitle="ワークショップ" pageSubtitle="Workshop" />
      <Section
        id="programming"
        headImage={data.progHeadImage}
        photos={[
          { image: photoMap.programming },
          { image: photoMap.programming2 },
        ]}
      >
        <h3>プログラミング教室</h3>
        <p>ゲームで遊びながら楽しくプログラミングの基礎を勉強しよう！！</p>
        <p>
          仕掛けを駆使しながらキャラクターを縦横無尽に動かしてダンジョンを攻略♪
        </p>
        <p>君はどのレベルまでクリアできるかな？</p>
        <p>
          <a
            href="https://dev.tose2125.net/eeic19pro/"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            プログラミング教室のゲームはこちらのサイトで公開しております。
          </a>
        </p>
        <dl>
          <dt>場所</dt>
          <dd>
            <LocationBlock name="E5" /> 工学部2号館4階241号講義室
          </dd>
          <dt>時間</dt>
          <dd>9:00-18:00</dd>
        </dl>
        <small>
          ※午後は混雑が予想されるので、午前中の来場をおすすめします。
          <br />
          ※こちらは中学生くらいまでのプログラミング初心者が対象です。
        </small>
      </Section>
      <Section
        id="ework"
        headImage={data.eworkHeadImage}
        photos={[
          { image: photoMap.ework1, title: `初級：電子キャンドル` },
          { image: photoMap.ework2, title: `中級：テルミン` },
          { image: photoMap.ework3, title: `上級：パンパンダッシュ` },
        ]}
      >
        <h3>電子工作教室</h3>
        <p>
          毎年好評をいただいております電子工作教室、今年もまた新たにオリジナル電子工作キットを用意しました。
        </p>
        <p>回路図、配線図共に学生の手作りです。</p>
        <p>
          初級・中級・上級の3種類の難易度を用意しており、学生が丁寧にサポートいたしますので、小中学生の初心者から電子工作経験者まで幅広い方に楽しんでいただける内容となっています。
        </p>
        <p>
          複数人での制作も歓迎ですので、この機会に一緒に「メカ」を作って友達・親子の絆を深めてはいかがでしょうか？
        </p>
        <dl>
          <dt>場所</dt>
          <dd>
            <LocationBlock name="E7" /> 工学部2号館4階電気系学生実験室41A
          </dd>
          <dt>時間</dt>
          <dd>9:00-18:00</dd>
        </dl>
        <p>
          <small>
            ※電子工作教室は毎時0分から開始します。整理券を開始の1時間前に“電子工作教室の受付”で配布を開始します。配布開始直後になくなる恐れがありますので、ご了承ください。
            <br />
            ※キット売り切れの場合がございますので、早めの来場をおすすめします。
            <br />
            ※ご来場前にキット代金をご用意ください。初級は1000円、中級は2000円、上級は3000円となっております。
            <br />
            ※整理券に記載の時刻の5分前までに、工学部2号館4階電気系学生実験室41Aまでお越しください。工学部2号館のエレベータは混雑が予想されますので時間に余裕を持ってご来場ください。
          </small>
        </p>
      </Section>
    </Layout>
  )
}

export const query = graphql`
  query {
    progHeadImage: file(relativePath: { eq: "programming.jpg" }) {
      ...SectionHeadImage
    }
    eworkHeadImage: file(relativePath: { eq: "ework.png" }) {
      ...SectionHeadImage
    }
    photos: allFile(filter: { relativeDirectory: { eq: "workshop" } }) {
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

import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Section from "../components/section"
import { indexByFilename } from "../utils"

const ExhibitionPage = ({ data }) => {
  const bdmPhotoMap = indexByFilename(data.bdmPhotos)
  const labPhotoMap = indexByFilename(data.labPhotos)
  return (
    <Layout>
      <SEO
        title="展示"
        pathname="/exhibition"
        keywords={[
          `電子情報機器学`,
          `研究室`,
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
        description="学生制作物展示では学生が授業で制作したメカを展示します。研究室展示では最先端の研究や技術についてご紹介します。"
      />
      <Hero pageTitle="展示" pageSubtitle="Exhibition" />
      <Section
        headImage={data.bdmHeadImage}
        photos={bdmWorks.map(({ title, image }) => ({
          title,
          image: bdmPhotoMap[image],
        }))}
      >
        <h3>学生制作物展示</h3>
        <p>
          電子情報・電気電子工学科には『電子情報機器学』という毎年恒例の名物授業があり、「何か一つ、面白いメカを作りなさい」という課題を渡され、学生たちは寝る間も惜しんでメカの制作に取り組みます。ここでは、最終授業で行われた発表会で特に優秀と認められた作品を展示いたします。
        </p>
        <p>
          展示とは言っても、制作された作品たちを実際に動かして体験できるので子どもから大人まで幅広く楽しんでいただけます。
        </p>
        <p>学生の柔軟な発想と高度な技術力に触れてみてはいかがでしょうか？</p>
        <dl>
          <dt>場所</dt>
          <dd>工学部2号館4階241号講義室</dd>
          <dt>時間</dt>
          <dd>9:00-18:00</dd>
        </dl>
      </Section>
      <Section
        headImage={data.labHeadImage}
        photos={labExhibitions.map(({ title, image }) => ({
          title,
          image: labPhotoMap[image],
        }))}
      >
        <h3>研究室展示</h3>
        <p>
          電子情報・電気電子工学科で行われる最先端の研究についてわかりやすくご紹介します。高校・大学生はもちろん、小・中学生や大人も興味をもっていただける展示が盛り沢山！
        </p>
        <p>
          実際にその手で体験していただける企画もありますので、ぜひお越しになって、その手で、その目で「研究」を感じ取って下さい！
        </p>
        <dl>
          <dt>場所</dt>
          <dd>
            工学部2号館2階フォーラム
            <br />
            工学部2号館3階電気系会議室1・2・3
            <br />
            工学部3号館1階電力実験室2・3
            <br />
            工学部13号館雷実験室
          </dd>
          <dt>時間</dt>
          <dd>9:00-18:00</dd>
        </dl>
      </Section>
    </Layout>
  )
}

const bdmWorks = [
  { title: `コナン式スケボー`, image: `コナン式スケボー` },
  { title: `じゃんけんマシン`, image: `じゃんけんマシン` },
  {
    title: `消耗品の重さを量ってくれるくん`,
    image: `消耗品の重さを量ってくれるくん`,
  },
  { title: `ひらめき`, image: `ひらめき` },
  { title: `Cycholock`, image: `Cycholock` },
  { title: `カード判別器`, image: `カード判別器` },
  { title: `きわめて簡単な電子ゲーム`, image: `きわめて簡単な電子工作` },
  { title: `スマートポスト`, image: `スマートポスト` },
  { title: `Bonsai`, image: `Bonsai` },
]

const labExhibitions = [
  { title: `食事認識アプリFoodLog`, image: `aizawa_yamasaki2` },
  { title: `なんかすごいぞ！電気のチカラ！`, image: `hori_fujimoto` },
  {
    title: `ニューラルネットワークとワイヤレスエレクトロニクス`,
    image: `hirose_natsuaki`,
  },
  { title: `マイクロマシンを見てみよう`, image: `mita.jpg` },
  { title: `情報可視化実験の成果物展示`, image: `yatani` },
  { title: `コンピュータを作る，使う`, image: `sakai_irie` },
  { title: `動かす、運ぶ科学`, image: `koseki` },
  { title: `知の情報処理`, image: `tsuruoka` },
  {
    title: `極低温で起こる不思議な「超電導」現象に触れてみよう！`,
    image: `ohsaki`,
  },
  { title: `生体調和エレクトロニクス`, image: `someya_yokota` },
  { title: `筋電図でラジコンを動かそう`, image: `sekinolab1` },
  { title: `核融合プラズマを体感せよ!`, image: `onoyasushi` },
  { title: `光と電気を操る半導体デバイス`, image: `takagi_takenaka` },
  { title: `雷実験`, image: `kumada_fujii` },
  { title: `(車上一次式)リニア誘導モーターカー`, image: `baba` },
]

export const query = graphql`
  query {
    bdmHeadImage: file(relativePath: { eq: "bdm/じゃんけんマシン.jpg" }) {
      ...SectionHeadImage
    }
    bdmPhotos: allFile(filter: { relativeDirectory: { eq: "bdm" } }) {
      edges {
        node {
          name
          ...ContentPhotoImage
        }
      }
    }
    labHeadImage: file(relativePath: { eq: "lab2.jpg" }) {
      ...SectionHeadImage
    }
    labPhotos: allFile(filter: { relativeDirectory: { eq: "lab" } }) {
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

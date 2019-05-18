import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Section from "../components/section"

const VotePage = () => (
  <Layout>
    <SEO
      title="May Fes. Awards 投票方法のご案内"
      pathname="/vote/"
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
    <Hero pageTitle="投票のご案内" pageSubtitle="Vote for EEIC" />
    <Section id="vote">
      <h3>May Fes. Awards</h3>
      <p>
        近未来体験2019は五月祭の人気企画投票であるMay Fes.
        Awardsに参加しています。
        <br className="mobile-off" />
        ぜひ近未来体験2019への投票をお願いいたします！
      </p>
      <p>
        May Fes. Awardsの投票には下記の2通りの方法がございます。
        <br className="mobile-off" />
        どちらの方法でも、投票すると景品つきの福引に参加することができます。
      </p>
    </Section>
    <Section id="vote1">
      <h3>投票方法1: スマホで投票</h3>
      <p>
        以下のリンクから投票用のLINE@アカウントを登録して、企画ID:{" "}
        <strong className="emph">311</strong>にご投票ください。
      </p>
      <a
        href="https://line.me/R/ti/p/nT2Bp1ufat"
        rel="nofollow noreferrer"
        className="block-link"
        style={{
          backgroundColor: `#00b934`,
          color: `#FFF`,
          borderRadius: `5px`,
          padding: `0.5rem`,
          fontWeight: `bold`,
          margin: `0 auto`,
          maxWidth: `30em`,
        }}
      >
        「May Fes. Awards」投票 LINE@アカウント
      </a>
    </Section>
    <Section id="vote2">
      <h3>投票方法2: 案内所で投票</h3>
      <p>
        正門案内所・赤門案内所・農学部案内所のいずれかの案内所で、企画ID:{" "}
        <strong className="emph">311</strong>にご投票ください。
      </p>
      <p>
        各案内所の位置は、
        <a
          href="https://www.gogatsusai.jp/map"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          キャンパスマップ
        </a>
        をご覧ください。
      </p>
    </Section>
  </Layout>
)

export default VotePage

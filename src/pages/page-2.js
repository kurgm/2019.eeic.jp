import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Section from "../components/section"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Hero pageTitle="Page two" pageSubtitle="page 2" />
    <Section>
      <h3>Hi from the second page</h3>
      <p>Welcome to page 2</p>
    </Section>
  </Layout>
)

export default SecondPage

import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Section from "../components/section"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Hero pageTitle="404" pageSubtitle="Not found" />
    <Section>
      <h3>NOT FOUND</h3>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Section>
  </Layout>
)

export default NotFoundPage

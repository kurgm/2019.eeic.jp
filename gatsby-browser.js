/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

exports.onInitialClientRender = () => {
  const scriptUrls = [
    `https://apis.google.com/js/platform.js`,
    `https://platform.twitter.com/widgets.js`,
  ]
  for (const url of scriptUrls) {
    const s = document.createElement(`script`)
    s.src = url
    s.charset = `utf-8`
    s.async = true
    document.getElementsByTagName(`head`)[0].appendChild(s)
  }
}

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const fs = require(`fs`)
const path = require(`path`)

const staticFiles = [
  { src: `src/stfiles/htaccess`, dest: `.htaccess` },
  { src: `src/stfiles/static-htaccess`, dest: `static/.htaccess` },
  { src: `src/stfiles/google2bc75986b7340908.html`, dest: `google2bc75986b7340908.html` },
]

exports.onPostBuild = async ({ store }) => {
  const { program } = store.getState()
  await Promise.all(staticFiles.map(({ src, dest }) => {
    const srcPath = path.join(program.directory, src)
    const destPath = path.join(program.directory, `public`, dest)
    return new Promise((resolve, reject) => {
      fs.createReadStream(srcPath)
        .pipe(fs.createWriteStream(destPath))
        .on('finish', resolve)
        .on('error', reject)
    })
  }))
}

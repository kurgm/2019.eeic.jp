/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const fs = require(`fs`)
const path = require(`path`)

const htFiles = [
  { src: `src/htfiles/htaccess`, dest: `.htaccess` },
  { src: `src/htfiles/static-htaccess`, dest: `static/.htaccess` },
]

exports.onPostBuild = async ({ store }) => {
  const { program } = store.getState()
  await Promise.all(htFiles.map(({ src, dest }) => {
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

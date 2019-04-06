export const indexByFilename = data => {
  const result = {}
  data.edges.forEach(({ node }) => {
    result[node.name] = node
  })
  return result
}

const postQuery = `{
  posts:allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/posts/"}}) {
    edges {
      node {
        objectID: id
        excerpt(pruneLength: 100, truncate: true)
        frontmatter {
          title
          date(formatString: "MMM DD YYYY")
          path
          thumbnail
          thumbnailImg
        }
        fields {
          readingTime {
            text
          }
        }
      }
    }
  }
}
`
const unnestFrontmatter = node => {
  const { frontmatter, ...rest } = node
  return {
    ...frontmatter,
    ...rest,
  }
}

const queries = [
  {
    query: postQuery,
    transformer: ({ data }) =>
      data.posts.edges.map(edge => edge.node).map(unnestFrontmatter),
    indexName: 'posts',
  },
]
module.exports = queries

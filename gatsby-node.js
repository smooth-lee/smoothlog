const path = require('path')

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const postTemplate = path.resolve(
    __dirname,
    './src/components/post/PostTemplate/PostTemplate.js'
  )

  const posts = graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
              title
              description
              date(formatString: "MMM DD YYYY")
              thumbnail
              thumbnailImg
              tags
            }
            html
            id
            excerpt(pruneLength: 200, truncate: true)
            fields {
              readingTime {
                text
              }
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      Promise.reject(errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        context: {
          html: node.html,
          title: String(node.frontmatter.title),
          description: node.frontmatter.description
            ? String(node.frontmatter.description)
            : node.excerpt,
          date: node.frontmatter.date,
          id: node.id,
          readingTime: node.fields.readingTime.text,
          thumbnail: node.frontmatter.thumbnail,
          thumbnailImg: node.frontmatter.thumbnailImg,
          tags: node.frontmatter.tags,
        },
        component: postTemplate,
      })
    })
  })
  return Promise.all([posts])
}

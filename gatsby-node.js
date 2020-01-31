const path = require('path')

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const { data, errors } = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
              title
              date(formatString: "MMM DD YYYY")
              thumbnail
              thumbnailImg
            }
            html
            id
            fields {
              readingTime {
                text
              }
            }
          }
        }
      }
    }
  `)

  if (errors) {
    throw errors
  }

  data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      context: {
        html: node.html,
        title: String(node.frontmatter.title),
        date: node.frontmatter.date,
        id: node.id,
        readingTime: node.fields.readingTime.text,
        thumbnail: node.frontmatter.thumbnail,
        thumbnailImg: node.frontmatter.thumbnailImg,
      },
      component: path.resolve(
        __dirname,
        './src/components/post/PostTemplate/PostTemplate.js'
      ),
    })
  })
}

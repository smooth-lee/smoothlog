const path = require('path')

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const { data, errors } = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            frontmatter {
              title
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
      path: node.frontmatter.title,
      context: {
        html: node.html,
        title: String(node.frontmatter.title),
      },
      component: path.resolve(
        __dirname,
        './src/components/common/PostTemplate/PostTemplate.js'
      ),
    })
  })
}

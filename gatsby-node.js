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
      component: path.resolve(
        __dirname,
        './src/components/post/PostTemplate/PostTemplate.js'
      ),
    })
  })
}

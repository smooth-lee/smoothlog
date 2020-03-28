const path = require('path')
const _ = require('lodash')

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const postTemplate = path.resolve(
    __dirname,
    './src/components/post/PostTemplate/PostTemplate.js'
  )
  const tagTemplate = path.resolve(
    __dirname,
    './src/components/tags/TagTemplate/TagTemplate.js'
  )

  const result = await graphql(`
    {
      postsRemark: allMarkdownRemark {
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
          previous {
            frontmatter {
              path
              title
            }
          }
          next {
            frontmatter {
              path
              title
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)
  // handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const posts = result.data.postsRemark.edges

  posts.forEach(({ node, previous, next }) => {
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
        prevPost: previous,
        nextPost: next,
      },
      component: postTemplate,
    })
  })

  const tags = result.data.tagsGroup.group

  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      context: {
        tag: tag.fieldValue,
      },
      component: tagTemplate,
    })
  })
}

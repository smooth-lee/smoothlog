import React from 'react'
import { PostItem } from '../PostItem'
import { useStaticQuery } from 'gatsby'
import './PostList.scss'

const PostList = () => {
  const data = useStaticQuery(PostListQuery)
  return (
    <ul className="PostList">
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <PostItem key={node.id} node={node} />
      ))}
    </ul>
  )
}

const PostListQuery = graphql`
  query PostListQuery {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          frontmatter {
            path
            title
            description
            date(formatString: "MMM DD YYYY")
            thumbnail
            thumbnailImg
          }
          html
          id
          excerpt(pruneLength: 100, truncate: true, format: HTML)
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
export default PostList

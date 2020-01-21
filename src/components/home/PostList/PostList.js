import React from 'react'
import { PostItem } from '../PostItem'
import { useStaticQuery } from 'gatsby'
import './PostList.scss'

const PostList = () => {
  const data = useStaticQuery(PostListQuery)
  return (
    <ul className="PostList">
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <PostItem node={node} />
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
            date(formatString: "YYYY-MM-DD HH:mm")
          }
          html
          id
          excerpt(pruneLength: 200, truncate: true)
        }
      }
    }
  }
`
export default PostList

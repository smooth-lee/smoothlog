import React from 'react'
import { Link } from 'gatsby'
import './PostItem.scss'

const PostItem = ({ node }) => {
  return (
    <li className="PostItem">
      <h2 className="post-title">
        <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
      </h2>
      <h3 className="post-create-date">{node.frontmatter.date}</h3>
      <p className="post-desc">{node.excerpt}</p>
    </li>
  )
}

export default PostItem

import React from 'react'
import { Link } from 'gatsby'
import './PostItem.scss'

const PostItem = ({ node }) => {
  return (
    <li className="PostItem">
      <h2 className="post-title">
        <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
      </h2>
      <div className="post-time-info">
        <span className="post-create-date">{node.frontmatter.date}</span>
        {'·'}
        <span className="post-reading-time">
          {node.fields.readingTime.text}
        </span>
      </div>
      <p className="post-desc">{node.excerpt}</p>
    </li>
  )
}

export default PostItem

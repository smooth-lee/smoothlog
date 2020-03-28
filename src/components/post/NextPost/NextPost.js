import React from 'react'
import './NextPost.scss'
import { Link } from 'gatsby'

const NextPost = ({ nextPost }) => {
  if (!nextPost) return null
  const { path, title } = nextPost.frontmatter
  return (
    <div className="NextPost">
      <Link to={path}>
        <div>다음 글</div>
        <h3>{title}</h3>
      </Link>
    </div>
  )
}

export default NextPost

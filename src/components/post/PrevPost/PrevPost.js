import React from 'react'
import './PrevPost.scss'
import { Link } from 'gatsby'

const PrevPost = ({ prevPost }) => {
  if (!prevPost) return null
  const { path, title } = prevPost.frontmatter
  return (
    <div className="PrevPost">
      <Link to={path}>
        <div>이전 글</div>
        <h3>{title}</h3>
      </Link>
    </div>
  )
}

export default PrevPost

import React from 'react'
import './PostTagItem.scss'
import { Link } from 'gatsby'

const PostTagItem = ({ tag }) => {
  return (
    <li className="PostTagItem">
      <Link to={`/tags/${tag}`}>{tag}</Link>
    </li>
  )
}

export default PostTagItem

import React from 'react'
import './TagItem.scss'
import { Link } from 'gatsby'

const TagItem = ({ tagInfo }) => {
  return (
    <li className="TagItem">
      <Link className="tag-box" to={`/tags/${tagInfo.fieldValue}`}>
        <span className="tag-name">{tagInfo.fieldValue}</span>
        <span className="tag-count">{tagInfo.totalCount}</span>
      </Link>
    </li>
  )
}

export default TagItem

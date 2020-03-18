import React from 'react'
import './TagItem.scss'
import { Link } from 'gatsby'

const TagItem = ({ tagInfo, tagPercentage }) => {
  return (
    <li
      className={`TagItem ${(tagPercentage > 20 && 'small-tag') ||
        (tagPercentage > 40 && 'medium-tag') ||
        (tagPercentage > 70 && 'big-tag') ||
        'tiny-tag'}`}
    >
      <Link className="tag-box" to={`/tags/${tagInfo.fieldValue}`}>
        {tagInfo.fieldValue}
        <span>{tagInfo.totalCount}</span>
      </Link>
    </li>
  )
}

export default TagItem

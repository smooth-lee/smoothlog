import React from 'react'
import './TagList.scss'
import { TagItem } from '../TagItem'

const TagList = ({ tags }) => {
  return (
    <ul className="TagList">
      {tags.map(tag => (
        <TagItem key={tag} tag={tag} />
      ))}
    </ul>
  )
}

export default TagList

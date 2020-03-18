import React from 'react'
import './PostTagList.scss'
import { PostTagItem } from '../PostTagItem'

const PostTagList = ({ tags }) => {
  return (
    <ul className="PostTagList">
      {tags.map(tag => (
        <PostTagItem key={tag} tag={tag} />
      ))}
    </ul>
  )
}

export default PostTagList

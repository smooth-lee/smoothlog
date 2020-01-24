import React from 'react'
import './PostAuthor.scss'
const PostAuthor = ({ postDate }) => {
  return (
    <div className="PostAuthor">
      <div className="author-image">
        <img
          src={'https://avatars3.githubusercontent.com/u/39724046?s=460&v=4'}
          alt="author"
        />
      </div>
      <div className="author-desc">
        <div className="author-name">
          <span>SeungWoo Lee ( @smoothlee7104 )</span>
        </div>
        <div className="post-date">
          <span>{postDate}</span>
        </div>
      </div>
    </div>
  )
}

export default PostAuthor

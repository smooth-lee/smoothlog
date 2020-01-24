import React from 'react'
import './PostAuthor.scss'
const PostAuthor = ({ postDate, readingTime }) => {
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
        <div className="author-post-date-info">
          <span className="author-post-date">{postDate}</span>
          {'·'}
          <span className="author-post-reading-time">{readingTime}</span>
        </div>
      </div>
    </div>
  )
}

export default PostAuthor

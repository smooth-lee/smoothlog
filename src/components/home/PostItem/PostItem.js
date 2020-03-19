import React from 'react'
import { Link } from 'gatsby'
import './PostItem.scss'
import { MarkdownRender } from '../../common/MarkdownRender'

const PostItem = ({ node }) => {
  const {
    path,
    title,
    thumbnail,
    thumbnailImg,
    date,
    description,
  } = node.frontmatter
  return (
    <li className="PostItem">
      <Link to={path}>
        <div className="post-thumbnail-wrap">
          {thumbnail && (
            <div
              className="post-thumbnail"
              style={{ backgroundImage: `url(${thumbnail})` }}
              alt="thumbnail"
            />
          )}
          {thumbnailImg && (
            <div className="post-thumbnail-img-box">
              <img
                className="post-thumbnail-img"
                src={thumbnailImg}
                alt="thumbnail"
              />
            </div>
          )}
        </div>
        <div className="post-detail">
          <h2 className="post-title">{title}</h2>
          <div className="post-time-info">
            <span className="post-create-date">{date}</span>
            {'·'}
            <span className="post-reading-time">
              {node.fields.readingTime.text}
            </span>
          </div>
          <p className="post-desc">
            {description ? description : <MarkdownRender html={node.excerpt} />}
          </p>
        </div>
      </Link>
    </li>
  )
}

export default PostItem

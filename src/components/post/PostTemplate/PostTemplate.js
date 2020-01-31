import React from 'react'
import Layout from '../../layout'
import SEO from '../../seo'
import './PostTemplate.scss'
import { PostAuthor } from '../PostAuthor'
import { MarkdownRender } from '../../common/MarkdownRender'
import { Comments } from '../../common/Comments/Comments'
import { TagList } from '../TagList'

const PostTemplate = React.memo(props => {
  const url = window.location.href
  const {
    title,
    description,
    date,
    html,
    readingTime,
    thumbnail,
    thumbnailImg,
    tags,
  } = props.pageContext
  return (
    <Layout>
      <SEO
        title={title}
        description={description || null}
        keywords={tags.toString() || null}
        url={url}
        thumbnail={(thumbnail ? thumbnail : thumbnailImg) || null}
      />
      <div className="PostTemplate">
        <h1 className="post-head-title">{title}</h1>
        <PostAuthor postDate={date} readingTime={readingTime} />
        {thumbnail && (
          <div
            className="post-thumbnail"
            style={{ backgroundImage: `url(${thumbnail})` }}
            alt="thumbnail"
          />
        )}
        {thumbnailImg && (
          <img
            className="post-thumbnail-img"
            src={thumbnailImg}
            alt="thumbnail"
          />
        )}
        <MarkdownRender html={html} />
        {tags && <TagList tags={tags} />}
        {process.env.NODE_ENV === 'production' && (
          <Comments repo={'smoothlee7104/smoothlog-comments'} />
        )}
      </div>
    </Layout>
  )
})

PostTemplate.displayName = 'PostTemplate'

export default PostTemplate

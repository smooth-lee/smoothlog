import React from 'react'
import Layout from '../../layout'
import SEO from '../../seo'
import './PostTemplate.scss'
import { PostAuthor } from '../PostAuthor'
import { MarkdownRender } from '../../common/MarkdownRender'
import { Comments } from '../../common/Comments/Comments'
import { PostTagList } from '../PostTagList'
import { AnotherPostWrap } from '../AnotherPostWrap'
import { PrevPost } from '../PrevPost'
import { NextPost } from '../NextPost'

const PostTemplate = React.memo(props => {
  let url
  if (typeof window !== 'undefined') {
    url = window.location.href
  }
  const {
    title,
    description,
    date,
    html,
    readingTime,
    thumbnail,
    thumbnailImg,
    tags,
    prevPost,
    nextPost,
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
        {tags && <PostTagList tags={tags} />}
        <AnotherPostWrap>
          <PrevPost prevPost={prevPost} />
          <NextPost nextPost={nextPost} />
        </AnotherPostWrap>
        {process.env.NODE_ENV === 'production' && (
          <Comments repo={'smoothlee7104/smoothlog-comments'} />
        )}
      </div>
    </Layout>
  )
})

PostTemplate.displayName = 'PostTemplate'

export default PostTemplate

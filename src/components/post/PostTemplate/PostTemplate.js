import React from 'react'
import Layout from '../../layout'
import SEO from '../../seo'
import './PostTemplate.scss'
import { PostAuthor } from '../PostAuthor'
import { MarkdownRender } from '../../common/MarkdownRender'
import { Comments } from '../../common/Comments/Comments'

const PostTemplate = React.memo(props => {
  const { title, date, html, id, readingTime } = props.pageContext
  return (
    <Layout>
      <SEO title={title} />

      <div className="PostTemplate">
        <h1 className="post-head-title">{title}</h1>
        <PostAuthor postDate={date} readingTime={readingTime} />
        <MarkdownRender html={html} />
        {process.env.NODE_ENV === 'production' && (
          <Comments repo={'smoothlee7104/smoothlog-comments'} id={id} />
        )}
      </div>
    </Layout>
  )
})

PostTemplate.displayName = 'PostTemplate'

export default PostTemplate

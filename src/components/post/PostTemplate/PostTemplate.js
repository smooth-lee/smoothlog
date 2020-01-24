import React from 'react'
import Layout from '../../layout'
import SEO from '../../seo'
import './PostTemplate.scss'
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'
import { PostAuthor } from '../PostAuthor'
import { MarkdownRender } from '../../common/MarkdownRender'

const PostTemplate = React.memo(props => {
  const { title, date, html, id, readingTime } = props.pageContext
  const { origin, pathname } = props.location
  let disqusConfig = {
    url: `${origin + pathname}`,
    identifier: id,
    title: title,
  }
  return (
    <Layout>
      <SEO title={title} />

      <div className="PostTemplate">
        <h1 className="post-head-title">{title}</h1>
        <PostAuthor postDate={date} readingTime={readingTime} />
        <MarkdownRender html={html} />
        {process.env.NODE_ENV === 'production' && (
          <React.Fragment>
            <CommentCount config={disqusConfig} placeholder={'...'} />
            <Disqus config={disqusConfig} />
          </React.Fragment>
        )}
      </div>
    </Layout>
  )
})

PostTemplate.displayName = 'PostTemplate'

export default PostTemplate

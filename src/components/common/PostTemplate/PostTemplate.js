import React from 'react'
import Layout from '../../layout'
import SEO from '../../seo'

const PostTemplate = React.memo(props => {
  const { title, date, html } = props.pageContext
  return (
    <Layout>
      <SEO title={title} />
      <h2>{title}</h2>
      {date}
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
})

PostTemplate.displayName = 'PostTemplate'

export default PostTemplate

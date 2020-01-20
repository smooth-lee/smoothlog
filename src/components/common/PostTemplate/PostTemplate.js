import React from 'react'
import Layout from '../../layout'

const PostTemplate = React.memo(props => {
  const { title, date, html } = props.pageContext
  return (
    <Layout>
      <h2>{title}</h2>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
})

PostTemplate.displayName = 'PostTemplate'

export default PostTemplate

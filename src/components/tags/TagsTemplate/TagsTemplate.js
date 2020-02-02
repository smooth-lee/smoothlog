import React from 'react'
import './TagsTemplate.scss'
import Layout from '../../layout'

const TagsTemplate = ({ children }) => {
  return (
    <Layout>
      <SEO title={'태그 목록'} />
      <div className="TagsTemplate">
        <main>{children}</main>
      </div>
    </Layout>
  )
}

export default TagsTemplate

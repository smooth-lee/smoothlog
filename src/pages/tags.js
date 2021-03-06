import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { TagList } from '../components/tags/TagList'

const TagsPage = () => {
  return (
    <Layout>
      <SEO title="Tags" />
      <TagList />
    </Layout>
  )
}

export default TagsPage

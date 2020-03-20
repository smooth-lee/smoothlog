import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { TagList } from '../components/tags/TagList'
import { Emoji } from '../components/common/Emoji'

const TagsPage = () => {
  return (
    <Layout>
      <SEO title="Tags" />
      <h1>
        <Emoji symbol="🏷️" label="tag"></Emoji> 태그
      </h1>
      <TagList />
    </Layout>
  )
}

export default TagsPage

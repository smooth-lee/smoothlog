import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { PostList } from '../components/home/PostList'
import { Emoji } from '../components/common/Emoji'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <PostList />
    </Layout>
  )
}

export default IndexPage

import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { PostList } from '../components/home/PostList'
import { Emoji } from '../components/common/Emoji'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>
        <Emoji symbol="📖" label="book" /> 게시글 목록
      </h1>
      <PostList />
    </Layout>
  )
}

export default IndexPage

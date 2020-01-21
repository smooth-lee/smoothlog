import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { PostList } from '../components/home/PostList'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>최근 작성한 게시글 목록</h1>
      <PostList />
    </Layout>
  )
}

export default IndexPage

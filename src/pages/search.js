import React from 'react'
import Layout from '../components/layout'
import Search from '../components/search/Search/Search'
import SEO from '../components/seo'

const SearchPage = () => {
  return (
    <Layout>
      <SEO title="Search" />
      <Search />
    </Layout>
  )
}

export default SearchPage

import React from 'react'
import { Link } from 'gatsby'
import SEO from '../components/seo'
import './404.scss'
import { Emoji } from '../components/common/Emoji'

const NotFoundPage = () => (
  <div className="NotFound">
    <SEO title="찾을 수 없는 페이지" />
    <h1>
      <Emoji symbol="⛔" label="not-found" /> 404 NOT FOUND{' '}
      <Emoji symbol="⛔" label="not-found" />
    </h1>
    <p>찾을 수 없는 페이지입니다.</p>
    <Link to="/">
      <button>홈으로</button>
    </Link>
  </div>
)

export default NotFoundPage

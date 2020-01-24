import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <header
    className="header"
    style={{
      marginBottom: `1.45rem`,
      boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.05)',
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0.8rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0, fontSize: '1.8rem' }}>
        <Link
          to="/"
          style={{
            color: `#000`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

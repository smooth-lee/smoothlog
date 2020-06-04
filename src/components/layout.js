/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import './layout.scss'
import { HeaderContainer } from './common/Header'

const Layout = ({ children }) => {
  return (
    <>
      <HeaderContainer />
      <div
        style={{
          margin: `0 auto`,
          marginTop: `1.45rem`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer className="footer">
          ©<a href="https://github.com/smooth-lee">smoothlog</a>, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

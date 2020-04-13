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
import FontFaceObserver from 'fontfaceobserver'

const Layout = ({ children }) => {
  if (typeof sessionStorage !== 'undefined') {
    if (sessionStorage.fontsLoaded) {
      const html = document.documentElement
      html.classList.add('fonts-loaded')
    } else {
      document.documentElement.classList.add('blocking-time')
      setTimeout(function() {
        document.documentElement.classList.remove('blocking-time')
      }, 400)
      const font = new FontFaceObserver('Noto Sans KR')
      const font2 = new FontFaceObserver('Noto Serif KR')

      Promise.all([font.load(null, 3000), font2.load(null, 3000)]).then(
        function() {
          document.documentElement.classList.add('fonts-loaded')
          sessionStorage.fontsLoaded = true
        }
      )
    }
  }

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
          ©<a href="https://github.com/smoothlee7104">smoothlog</a>, Built with
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

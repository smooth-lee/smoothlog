import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { MdMenu } from 'react-icons/md'
import './Header.scss'
import { HeaderSideMenu } from '../HeaderSideMenu'

const Header = ({ onToggle, isOpened }) => (
  <>
    <HeaderSideMenu onToggle={onToggle} isOpened={isOpened} />
    <header className="Header">
      <div className="header-wrap">
        <div className="header-logo">
          <h1>
            <Link to="/">smoothlog</Link>
          </h1>
        </div>
        <div className="header-menu">
          <MdMenu onClick={onToggle} />
        </div>
      </div>
    </header>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

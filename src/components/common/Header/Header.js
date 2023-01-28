import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { MdMenu, MdSearch } from 'react-icons/md'
import './Header.scss'
import { HeaderSideMenu } from '../HeaderSideMenu'
import Headroom from 'react-headroom'

const Header = ({ onToggle, isOpened }) => (
  <>
    <HeaderSideMenu onToggle={onToggle} isOpened={isOpened} />
    <Headroom>
      <header className={`Header`}>
        <div className="header-wrap">
          <div className="header-logo">
            <h1>
              <Link to="/">smoothlog</Link>
            </h1>
          </div>
          {/* <div className="header-search">
            <Link to="/search">
              <MdSearch />
            </Link>
          </div> */}
          <div className="header-menu">
            <MdMenu onClick={onToggle} />
          </div>
        </div>
      </header>
    </Headroom>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

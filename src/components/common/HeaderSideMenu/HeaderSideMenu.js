import React from 'react'
import './HeaderSideMenu.scss'
import { MdClose } from 'react-icons/md'
import { Link } from 'gatsby'
import { DarkMode } from '../DarkMode'
import { HeaderSideTags } from '../HeaderSideTags'

const HeaderSideMenu = ({ onToggle, isOpened }) => {
  return (
    <div className={`HeaderSideMenu ${isOpened ? 'is-side-menu-opened' : ''}`}>
      <div
        role="button"
        tabIndex={0}
        className="side-menu-overlay"
        onClick={onToggle}
        onKeyDown={onToggle}
      />
      <div className="side-menu-slide">
        <div className="side-menu-content">
          <section className="side-menu-tags">
            <h3>태그</h3>
            <HeaderSideTags />
            <div className="side-menu-tags-link">
              <Link to="/tags">더보기</Link>
            </div>
          </section>
          <section className="side-menu-darkmode">
            <h3>다크모드</h3>
            <DarkMode />
          </section>
        </div>
        <div className="side-menu-close">
          <MdClose onClick={onToggle} />
        </div>
      </div>
    </div>
  )
}

export default HeaderSideMenu

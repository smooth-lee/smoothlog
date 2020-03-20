import React from 'react'
import './HeaderSideMenu.scss'
import { MdClose } from 'react-icons/md'
import { TagList } from '../../tags/TagList'
import { Link } from 'gatsby'
import { DarkMode } from '../DarkMode'

const HeaderSideMenu = ({ onToggle, isOpened }) => {
  return (
    <div className={`HeaderSideMenu ${isOpened ? 'is-side-menu-opened' : ''}`}>
      <div class="side-menu-overlay" onClick={onToggle}></div>
      <div class="side-menu-slide">
        <div class="side-menu-content">
          <section class="side-menu-tags">
            <h3>태그</h3>
            <TagList />
            <div className="side-menu-tags-link">
              <Link to="/tags">더보기</Link>
            </div>
          </section>
          <section className="side-menu-darkmode">
            <h3>다크모드</h3>
            <DarkMode />
          </section>
        </div>
        <div class="side-menu-close">
          <MdClose onClick={onToggle} />
        </div>
      </div>
    </div>
  )
}

export default HeaderSideMenu

import React from 'react'
import './HeaderSideMenu.scss'
import { MdClose } from 'react-icons/md'
import { TagList } from '../../tags/TagList'
import { Link } from 'gatsby'

const HeaderSideMenu = ({ onToggle, isOpened }) => {
  return (
    <div className={`HeaderSideMenu ${isOpened ? 'is-side-menu-opened' : ''}`}>
      <div class="side-menu-overlay" onClick={onToggle}></div>
      <div class="side-menu-slide">
        <div class="side-menu-content">
          <div class="side-menu-tags">
            <h3>태그</h3>
            <TagList />
            <div className="side-menu-tags-link">
              <Link to="/tags">더보기</Link>
            </div>
          </div>
        </div>
        <div class="side-menu-close">
          <MdClose onClick={onToggle} />
        </div>
      </div>
    </div>
  )
}

export default HeaderSideMenu

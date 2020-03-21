import React from 'react'
import { connectSearchBox } from 'react-instantsearch-dom'
import { MdSearch } from 'react-icons/md'
import './SearchInput.scss'
export default connectSearchBox(({ refine, ...rest }) => (
  <div className="SearchInput">
    <MdSearch />
    <input
      type="text"
      placeholder="검색어를 입력해 주세요."
      aria-label="Search"
      onChange={e => refine(e.target.value)}
      {...rest}
    />
  </div>
))

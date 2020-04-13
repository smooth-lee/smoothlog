import React from 'react'
import './HeaderSideTags.scss'
import { useStaticQuery, graphql, Link } from 'gatsby'
const HeaderSideTags = () => {
  const data = useStaticQuery(HeaderSideTagListQuery)
  data.allMarkdownRemark.group.sort((a, b) => {
    // 내림차순
    return a.totalCount > b.totalCount
      ? -1
      : a.totalCount < b.totalCount
      ? 1
      : 0
  })
  return (
    <ul className="HeaderSideTagList">
      {data.allMarkdownRemark.group.map(tagInfo => (
        <li className={`HeaderSideTagItem`} key={tagInfo.fieldValue}>
          <Link className="tag-box" to={`/tags/${tagInfo.fieldValue}`}>
            {tagInfo.fieldValue}
            <span>{tagInfo.totalCount}</span>
          </Link>
        </li>
      ))}
    </ul>
  )
}

const HeaderSideTagListQuery = graphql`
  query HeaderSideTagListQuery {
    allMarkdownRemark {
      group(field: frontmatter___tags, limit: 10) {
        fieldValue
        totalCount
      }
    }
  }
`

export default HeaderSideTags

import React from 'react'
import './HeaderSideTags.scss'
import { useStaticQuery, graphql, Link } from 'gatsby'
const HeaderSideTags = () => {
  const data = useStaticQuery(HeaderSideTagListQuery)
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

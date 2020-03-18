import React from 'react'
import './TagList.scss'
import { useStaticQuery, graphql } from 'gatsby'
import { TagItem } from '../TagItem'

const TagList = () => {
  const data = useStaticQuery(TagListQuery)
  return (
    <ul className="TagList">
      {data.allMarkdownRemark.group.map(tagInfo => (
        <TagItem tagInfo={tagInfo} />
      ))}
    </ul>
  )
}

const TagListQuery = graphql`
  query TagListQuery {
    allMarkdownRemark {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`

export default TagList

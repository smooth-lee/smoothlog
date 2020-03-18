import React from 'react'
import './TagList.scss'
import { useStaticQuery, graphql } from 'gatsby'
import { TagItem } from '../TagItem'

const TagList = () => {
  const data = useStaticQuery(TagListQuery)
  const tagList = data.allMarkdownRemark.group.reduce((acc, current) => {
    return { totalCount: acc.totalCount + current.totalCount }
  })
  return (
    <ul className="TagList">
      {data.allMarkdownRemark.group.map(tagInfo => (
        <TagItem
          tagInfo={tagInfo}
          tagPercentage={tagPercentage(tagInfo.totalCount, tagList.totalCount)}
        />
      ))}
    </ul>
  )
}

const tagPercentage = (tagCount, totalCount) => {
  return Math.floor((tagCount / totalCount) * 100)
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

import React from 'react'
import './TagList.scss'
import { useStaticQuery, graphql } from 'gatsby'
import { TagItem } from '../TagItem'

const TagList = () => {
  const data = useStaticQuery(TagListQuery)
  const tagList = data.allMarkdownRemark.group.reduce((acc, current) => {
    return { totalCount: acc.totalCount + current.totalCount }
  })
  data.allMarkdownRemark.group.sort((a, b) => {
    // 내림차순
    return a.totalCount > b.totalCount
      ? -1
      : a.totalCount < b.totalCount
      ? 1
      : 0
  })
  return (
    <ul className="TagList">
      {data.allMarkdownRemark.group.map(tagInfo => (
        <TagItem
          key={tagInfo.fieldValue}
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

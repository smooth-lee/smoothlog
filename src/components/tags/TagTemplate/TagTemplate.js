import React from 'react'
import './TagTemplate.scss'
import Layout from '../../layout'
import SEO from '../../seo'
import { graphql, Link } from 'gatsby'
import { MarkdownRender } from '../../common/MarkdownRender'

const TagTemplate = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  return (
    <Layout>
      <SEO title={`#${tag}`} />
      <h1>{`#${tag}`}</h1>
      <p className="tag-post-count">{totalCount}개의 포스트</p>
      <ul className="TagTemplate">
        {edges.map(({ node }) => {
          const { id } = node
          const {
            path,
            title,
            thumbnail,
            thumbnailImg,
            date,
            description,
          } = node.frontmatter
          return (
            <li key={id} className="tag-post-item">
              <Link to={path}>
                {thumbnail && (
                  <div
                    className="post-thumbnail"
                    style={{ backgroundImage: `url(${thumbnail})` }}
                    alt="thumbnail"
                  />
                )}
                {thumbnailImg && (
                  <img
                    className="post-thumbnail-img"
                    src={thumbnailImg}
                    alt="thumbnail"
                  />
                )}
                <h2 className="post-title">{title}</h2>
                <div className="post-time-info">
                  <span className="post-create-date">{date}</span>
                  {'·'}
                  <span className="post-reading-time">
                    {node.fields.readingTime.text}
                  </span>
                </div>
                <p className="post-desc">
                  {description ? (
                    description
                  ) : (
                    <MarkdownRender html={node.excerpt} />
                  )}
                </p>
              </Link>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default TagTemplate

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            thumbnailImg
            thumbnail
            path
            description
            date(formatString: "MMM DD YYYY")
          }
          id
          excerpt(pruneLength: 100, truncate: true, format: HTML)
          fields {
            readingTime {
              text
            }
          }
        }
      }
    }
  }
`

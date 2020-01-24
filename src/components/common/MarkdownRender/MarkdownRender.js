import React from 'react'
import './MarkdownRender.scss'

const MarkdownRender = ({ html }) => {
  return (
    <div className="MarkdownRender">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

export default MarkdownRender

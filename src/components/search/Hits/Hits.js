import React from 'react'
import './Hits.scss'
import { connectHits, Highlight } from 'react-instantsearch-dom'
import { Link } from 'gatsby'

const Hits = connectHits(({ hits }) => (
  <div className="Hits">
    {hits.length ? (
      <>
        {hits.map(hit => {
          return (
            <div key={hit.objectID} className="hit-item">
              <Link to={hit.path}>
                <div className="post-thumbnail-wrap">
                  {hit.thumbnail && (
                    <div
                      className="post-thumbnail"
                      style={{ backgroundImage: `url(${hit.thumbnail})` }}
                      alt="thumbnail"
                    />
                  )}
                  {hit.thumbnailImg && (
                    <div className="post-thumbnail-img-box">
                      <img
                        className="post-thumbnail-img"
                        src={hit.thumbnailImg}
                        alt="thumbnail"
                      />
                    </div>
                  )}
                </div>
                <div className="post-detail">
                  <h2 className="post-title">
                    <Highlight attribute="title" hit={hit} tagName="strong" />
                  </h2>
                  <div className="post-time-info">
                    <span className="post-create-date">{hit.date}</span>
                    {'·'}
                    <span className="post-reading-time">
                      {hit.fields.readingTime.text}
                    </span>
                  </div>
                  <div className="post-desc">
                    {hit.description ? (
                      <Highlight
                        attribute="description"
                        hit={hit}
                        tagName="strong"
                      />
                    ) : (
                      <Highlight
                        attribute="excerpt"
                        hit={hit}
                        tagName="strong"
                      />
                    )}
                  </div>
                </div>
              </Link>
            </div>
          )
        })}
      </>
    ) : (
      <p>There were no results for your query. Please try again.</p>
    )}
  </div>
))

export default Hits

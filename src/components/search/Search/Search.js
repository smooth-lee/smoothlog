import React, { useState } from 'react'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, connectStateResults } from 'react-instantsearch-dom'
import { SearchInput } from '../SearchInput'
import { HitsWrapper } from '../HitsWrapper'
import { Hits } from '../Hits'

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
)

const Results = connectStateResults(
  ({ searchState: state, searchResults: res, children }) =>
    res && res.nbHits > 0 ? (
      children
    ) : (
      <p className="no-search-result">{`"${state.query}"에 대한 검색 결과가 없습니다.`}</p>
    )
)

export default function Search() {
  const [query, setQuery] = useState(``)
  const [focus, setFocus] = useState(false)
  let timer
  return (
    <InstantSearch
      indexName={process.env.GATSBY_ALGOLIA_INDEX_NAME}
      searchClient={searchClient}
      onSearchStateChange={({ query }) => {
        if (timer) {
          clearTimeout(timer)
        }
        timer = setTimeout(function() {
          setQuery(query)
        }, 300)
      }}
    >
      <SearchInput onFocus={() => setFocus(true)} {...{ focus }} />
      <HitsWrapper show={query.length > 0 && focus}>
        <Results>
          <Hits />
        </Results>
      </HitsWrapper>
    </InstantSearch>
  )
}

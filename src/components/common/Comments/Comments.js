import React, { useEffect } from 'react'
// import useDarkMode from 'use-dark-mode'

const src = 'https://utteranc.es/client.js'
const branch = 'master'

export const Comments = ({ repo }) => {
  const rootElm = React.createRef()
  useEffect(() => {
    const utterances = document.createElement('script')
    const utterancesConfig = {
      src,
      repo,
      branch,
      'issue-term': 'pathname',
      crossorigin: 'anonymous',
      async: true,
    }

    Object.keys(utterancesConfig).forEach(configKey => {
      utterances.setAttribute(configKey, utterancesConfig[configKey])
    })
    rootElm.current.appendChild(utterances)
  }, [])

  return <div className="utterences" ref={rootElm} />
}

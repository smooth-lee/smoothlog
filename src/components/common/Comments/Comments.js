import React, { useEffect } from 'react'
// import useDarkMode from 'use-dark-mode'

const src = 'https://utteranc.es/client.js'
const branch = 'master'

export const Comments = ({ repo, id }) => {
  const rootElm = React.createRef()
  // const darkMode = useDarkMode(false)
  // let theme = darkMode.value ? 'photon-dark' : 'github-light'
  useEffect(() => {
    const utterances = document.createElement('script')
    const utterancesConfig = {
      src,
      repo,
      branch,
      async: true,
      'issue-term': id,
      crossorigin: 'anonymous',
      theme: 'github-light',
    }

    Object.keys(utterancesConfig).forEach(configKey => {
      utterances.setAttribute(configKey, utterancesConfig[configKey])
    })
    rootElm.current.appendChild(utterances)
  }, [])

  return <div className="utterences" ref={rootElm} />
}

import React, { useEffect } from 'react'
import './Comments.scss'

const src = 'https://utteranc.es/client.js'
const branch = 'master'

export const Comments = ({ repo }) => {
  const rootElm = React.createRef()
  // const darkMode = useDarkMode(false)
  // let theme = darkMode.value ? 'photon-dark' : 'github-light'
  useEffect(() => {
    const utterances = document.createElement('script')
    const utterancesConfig = {
      src,
      repo,
      branch,
      'issue-term': 'title',
      crossorigin: 'anonymous',
      async: true,
    }

    Object.keys(utterancesConfig).forEach(configKey => {
      utterances.setAttribute(configKey, utterancesConfig[configKey])
    })
    rootElm.current.appendChild(utterances)
  }, [])

  return <div className="Comments" ref={rootElm} />
}

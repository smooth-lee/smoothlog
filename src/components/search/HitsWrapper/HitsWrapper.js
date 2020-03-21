import React from 'react'
import './HitsWrapper.scss'
const HitsWrapper = ({ show, children }) => {
  return (
    <div className="HitsWrapper" style={{ display: show ? 'block' : 'none' }}>
      {children}
    </div>
  )
}

export default HitsWrapper

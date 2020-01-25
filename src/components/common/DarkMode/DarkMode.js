import React from 'react'
import './DarkMode.scss'
import useDarkMode from 'use-dark-mode'
import { IoMdSunny, IoMdMoon } from 'react-icons/io'

const DarkMode = () => {
  const darkMode = useDarkMode(false)

  return (
    <div className="DarkMode">
      {darkMode.value ? (
        <IoMdMoon onClick={darkMode.disable} />
      ) : (
        <IoMdSunny onClick={darkMode.enable} />
      )}
      <span className="dark-mode-tooltip">
        {darkMode.value ? 'DarkMode off' : 'DarkMode on'}
      </span>
    </div>
  )
}

export default DarkMode

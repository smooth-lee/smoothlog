import React from 'react'
import './DarkMode.scss'
import useDarkMode from 'use-dark-mode'
import Switch from 'react-switch'
import { IoMdSunny, IoMdMoon } from 'react-icons/io'

const DarkMode = () => {
  let darkMode,
    isDarkMode = false
  if (typeof localStorage !== 'undefined') {
    if (localStorage.getItem('darkMode') === 'true') {
      isDarkMode = true
    } else {
      isDarkMode = false
    }
  }
  darkMode = useDarkMode(isDarkMode)
  return (
    <div className="DarkMode">
      <label htmlFor="dark-mode-switch">
        <IoMdSunny />
        <Switch
          checked={darkMode.value}
          onChange={darkMode.toggle}
          onColor="#86d3ff"
          onHandleColor="#2693e6"
          handleDiameter={30}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={20}
          width={48}
          className="react-switch"
          id="dark-mode-switch"
        ></Switch>
        <IoMdMoon />
      </label>
    </div>
  )
}

export default DarkMode

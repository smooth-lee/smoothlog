import React, { Component } from 'react'
import './DarkMode.scss'
import { IoMdSunny, IoMdMoon } from 'react-icons/io'

class DarkMode extends Component {
  state = {
    isDarkMode: false,
  }

  onClickEnableDarkMode = () => {
    document.body.classList.remove('light-mode')
    document.body.classList.add('dark-mode')
    this.setState({ isDarkMode: true })
  }

  onClickDisableDarkMode = () => {
    document.body.classList.remove('dark-mode')
    document.body.classList.add('light-mode')
    this.setState({ isDarkMode: false })
  }

  render() {
    const { isDarkMode } = this.state
    return (
      <div className="DarkMode">
        <div className="dark-mode-status">
          {isDarkMode ? (
            <IoMdMoon onClick={this.onClickDisableDarkMode} />
          ) : (
            <IoMdSunny onClick={this.onClickEnableDarkMode} />
          )}
        </div>
        <span className="dark-mode-tooltip">
          {isDarkMode ? 'DarkMode off' : 'DarkMode on'}
        </span>
      </div>
    )
  }
}

export default DarkMode

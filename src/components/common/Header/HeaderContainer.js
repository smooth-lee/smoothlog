import React, { Component } from 'react'
import Header from './Header'

class HeaderContainer extends Component {
  state = {
    isOpened: false,
  }

  onToggleSideMenu = () => {
    this.setState({ isOpened: !this.state.isOpened })
  }

  render() {
    const { isOpened } = this.state
    return (
      <React.Fragment>
        <Header onToggle={this.onToggleSideMenu} isOpened={isOpened} />
      </React.Fragment>
    )
  }
}

export default HeaderContainer

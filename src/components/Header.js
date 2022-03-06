import React from 'react';
import logo from '../assets/logo.svg';

class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          what you gonna do about it?
        </p>
      </header>
    );
  }
}

export default Header;
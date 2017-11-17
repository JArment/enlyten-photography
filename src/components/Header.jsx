import React, { Component } from 'react';
import logo from '../logo.svg';
import Nav from './Nav';

class Header extends Component {
  render() {
    return (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Enlyten Photography</h1>
          <Nav />
        </header>
    );
  }
}

export default Header;

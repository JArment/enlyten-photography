import React, { Component } from 'react';
import Logo from './Logo';
import Nav from './Nav';

class Header extends Component {
  render() {
    return (
        <header className="enlyten-header">
          <Logo />
          <Nav />
        </header>
    );
  }
}

export default Header;

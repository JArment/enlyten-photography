import React, { Component } from 'react';
import Logo from './Logo';
import Nav from './Nav';

class Header extends Component {
  render() {
    return (
        <header className="enlyten-header">
          <Nav />
          <Logo />
        </header>
    );
  }
}

export default Header;

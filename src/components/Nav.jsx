import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Nav.css';

// removed <nav className="enlyten-navbar">
class Nav extends Component {
  render() {
    return (
        <nav className="wrapper">
            <Link to="/portraits" className="one nav-styles">
                Portraits
            </Link>
            <Link to="/artistic" className="two nav-styles">
                Artistic
            </Link>
            <Link to="/events" className="three nav-styles">
                Events
            </Link>
            <Link to="/photographer" className="four nav-styles">
                The Photographer
            </Link>
        </nav>
    );
  }
}

export default Nav;

/*
function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}
*/

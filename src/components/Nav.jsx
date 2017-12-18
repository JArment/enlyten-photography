import React, { Component } from 'react';
import '../css/Nav.css';
// import Portraits from './Portraits';

//how do I create a component for the individual categories and reference them here?
//Or, should I create 1 component for "category" and make it reusable?
class Nav extends Component {
  render() {
    return (
        <nav className="enlyten-navbar">
            <div className="wrapper">
                <a href="#" className="one nav-styles">
                Portraits
                </a>
                <a href="#" className="two nav-styles">
                    Artistic
                </a>
                <a href="#" className="three nav-styles">
                    Events
                </a>
                <a href="#" className="four nav-styles">
                    The Photographer
                </a>
            </div>
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

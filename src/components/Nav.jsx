import React, { Component } from 'react';
import '../css/Nav.css';

class Nav extends Component {
  render() {
    return (
        //change all of these buttons to DROPDOWN menus? Remember static-SG dropdwon (very complex) or make clickable and show options on the link that will appear (after clicked)
        <nav className="enlyten-navbar">
            <div className="enlyten-dropdowns">
                <button className="dropdown">
                  <a href="#">PORTRAIT PHOTOGRAPHY</a>
                </button>
                <button className="dropdown">
                  <a href="#">ARTISTIC PHOTOGRAPHY</a>
                </button>
                <button className="dropdown">
                  <a href="#">EVENT PHOTOGRAPHY</a>
                </button>
                <button className="dropdown">
                  <a href="#">THE PHOTOGRAPHER</a>
                </button>
            </div>
        </nav>
    );
  }
}

export default Nav;



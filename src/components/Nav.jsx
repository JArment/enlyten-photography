import React, { Component } from 'react';
import '../css/Nav.css';

class Nav extends Component {
  render() {
    return (
        <nav className="enlyten-navbar">
            <div>
                {/*<a className="e-logo" scr="../images/logo"></a>*/}
            </div>
{/*            <div>
                <ul>
                  <li className="dropdown">
                      <a href="scapes.html">PORTRAIT <span className="caret"></span></a>
                  </li>
                  <li className="dropdown">
                      <a href="humans.html">ARTISTIC <span className="caret"></span></a>
                  </li>
                  <li className="dropdown">
                      <a href="other.html">EVENT<span className="caret"></span></a>
                  </li>
                  <li className="dropdown">
                      <a href="details.html">THE PHOTOGRAPHER <span className="caret"></span></a>
                   </li>
                  <li><a href="about.html">ABOUT</a></li>
                  <li><a href="investment.html">INVESTMENT</a></li>
                  <li><a href="contact.html">Contact</a></li>
                </ul>
            </div>*/}
        </nav>
    );
  }
}

export default Nav;



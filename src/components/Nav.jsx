import React, { Component } from 'react';
import '../css/Nav.css';

class Nav extends Component {
  render() {
    return (
        //change all of these buttons to DROPDOWN menus? Remember static-SG dropdwon (very complex) or make clickable and show options on the link that will appear (after clicked)
        <nav className="enlyten-navbar">
{/*            <div>
                <button className="button" id="buttonPortrait">
                  <a href="#">PORTRAIT PHOTOGRAPHY</a>
                </button>
                <button className="button" id="buttonArtistic">
                  <a href="#">ARTISTIC PHOTOGRAPHY</a>
                </button>
                <button className="button" id="buttonEvent">
                  <a href="#">EVENT PHOTOGRAPHY</a>
                </button>
                <button className="button" id="buttonThePhotographer">
                  <a href="#">THE PHOTOGRAPHER</a>
                </button>
            </div>*/}
            <div class="wrapper">
                <button class="one button-styles">
                    <a href="#">PORTRAITS</a>
                </button>
                <button class="two button-styles">
                    <a href="#">ARTISTIC</a>
                </button>
                <button class="three button-styles">
                    <a href="#">EVENTS</a>
                </button>
                <button class="four button-styles">
                    <a href="#">THE PHOTOGRAPHER</a>
                </button>
            </div>
        </nav>
    );
  }
}

export default Nav;



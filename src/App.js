import React, { Component } from 'react';
import Header from './components/Header';
import './css/App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <p className="App-intro">
                  the rest of my old HTML
                </p>
                <nav className="navbar navbar-inverse navbar-static-top example6">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand text-hide" href="index.html">ENLYTEN Photography</a>
                        </div>
                        <div id="bs-example-navbar-collapse-1" className="navbar-collapse collapse">
                            <ul className="nav navbar-nav navbar-right">
                                <li className="dropdown">
                                    <a href="scapes.html" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">PORTRAIT <span className="caret"></span></a>
                                    <ul className="dropdown-menu" role="menu">
                                        <li><a href="bridesgrooms.html">ENGAGEMENT & WEDDING</a></li>
                                        <li><a href="families.html">FAMILY & GROUP</a></li>
                                        <li><a href="school.html">SCHOOL & GRADUATION</a></li>
                                        <li><a href="musician.html">MUSICIAN</a></li>
                                        <li><a href="animals.html">ANIMAL & PET</a></li>
                                        <li><a href="candids.html">CANDID</a></li>
                                        <li><a href="business.html">BUSINESS & PLEASURE</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="humans.html" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">ARTISTIC <span className="caret"></span></a>
                                    <ul className="dropdown-menu" role="menu">
                                        <li><a href="landscapes.html">LANDSCAPE & SKYLINE</a></li>
                                        <li><a href="streetscapes.html">STREET</a></li>
                                        <li><a href="starscapes.html">STARSCAPE</a></li>
                                        <li><a href="products.html">PRODUCT & INDUSTRIAL</a></li>
                                        <li><a href="flora.html">FLORA</a></li>
                                        <li><a href="art.html">ABSTRACT</a></li>
                                        <li><a href="admiration.html">ADMIRATION</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="other.html" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">EVENT<span className="caret"></span></a>
                                    <ul className="dropdown-menu" role="menu">
                                        <li><a href="weddingEvent.html">WEDDING</a></li>
                                        <li><a href="realEstate.html">REAL ESTATE</a></li>
                                        <li><a href="journalism.html">JOURNALISM</a></li>
                                        <li><a href="festival.html">FESTIVAL & SHOW</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="details.html" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">THE PHOTOGRAPHER <span className="caret"></span></a>
                                    <ul className="dropdown-menu" role="menu">
                                        <li><a href="about.html">ABOUT</a></li>
                                        <li><a href="investment.html">INVESTMENT</a></li>
                                        <li><a href="contact.html">Contact</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default App;

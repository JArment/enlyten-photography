import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './containers/Home';
import Portraits from './containers/Portraits';
import Artistic from './containers/Artistic';
import Events from './containers/Events';
import Photographer from './containers/Photographer';
import './css/App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Header />
                    <main>
                        <Route exact path="/" component={Home} />
                        <Route path="/portraits" component={Portraits} />
                        <Route path="/artistic" component={Artistic} />
                        <Route path="/events" component={Events} />
                        <Route path="/photographer" component={Photographer} />
                    </main>
                </div>
            </Router>
        );
    }
}

export default App;

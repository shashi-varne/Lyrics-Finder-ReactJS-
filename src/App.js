import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Layout/Navbar';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Index from './components/Layout/Index';
import Provider from './Context'
import Lyrics from './components/tracks/Lyrics';

class App extends Component {
  render() {
    return (
      <Provider>
      <Router>
        <div className='all'>
          <Navbar/>
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Index} />
              <Route exact path='/lyrics/track/:id' component={Lyrics} />
            </Switch>
          </div>
        </div>
      </Router>
      </Provider>
    );
  }
}

export default App;

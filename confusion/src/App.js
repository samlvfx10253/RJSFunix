import React, { Component } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';

import Main from './components/MainComponents';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Main />
      </div>
    )
  }
}

export default App;

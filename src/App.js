import React, { Component } from 'react';

import Header from './Header'
import Footer from './Footer'
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentTime : 0
        }

        this.handleFooterClicked = this.handleFooterClicked.bind(this);
    }

    handleFooterClicked(time){
        this.setState({ currentTime: time })
    }
  render() {
      let { currentTime } = this.state

    return (
      <div className="App">
          <Header currentUser="Belinda" isLoggedIn />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <p>Create by Belinda</p>
            <p>Current Time: {currentTime}</p>
        </p>
          <Footer onTimerClick={this.handleFooterClicked}/>
      </div>
    );
  }
}

export default App;

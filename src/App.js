import React, { Component } from 'react';
import Timer from "./Components/Timer/timer";
import './App.css';

class App extends Component {
  
  onTick = () => this.state.time;
  
    render() {
      return (
        <div className="App">
          <Timer time = {600} step = {1} onTick={(state) => state.count}  />
          <Timer time = {1200} step = {2} onTick={(state) => state.count}  />
        </div>
      );
    }
  }

export default App;

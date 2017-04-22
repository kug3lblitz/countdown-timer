import React, { Component } from 'react';
import './app.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <div className="appTitle">Coundown: Time Until X</div>
        <div>
            <div className="clockDays">14 Days</div>
            <div className="clockHours">30 Hours</div>
            <div className="clockMinutes">15 Minutes</div>
            <div className="clockSeconds">30 Seconds</div>
        </div>
        <div>
            <input placeholder='target date'/>
            <button>Submit</button>
        </div>
      </div>
    )
  }
}

//html markup that is rendered must also be return()ed in react
export default App;

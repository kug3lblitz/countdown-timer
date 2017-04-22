import React, { Component } from 'react';
import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'December 24, 2018',
      newDeadline: ''
    }
  }
  //in react, state is always an object. The argument 'props' is also convention.

  changeDeadline(){
    this.setState({
      deadline: 'November 25, 2018'
    })
  }

  render(){
    return (
      <div className="App">
        <div className="appTitle">
           Coundown: Time Until {this.state.deadline}
        </div>
        <div>
            <div className="clockDays">14 Days</div>
            <div className="clockHours">30 Hours</div>
            <div className="clockMinutes">15 Minutes</div>
            <div className="clockSeconds">30 Seconds</div>
        </div>
        <div>
            <input
              placeholder='target date'
              onChange={event => console.log(event.target.value, 'event')}
            />
            <button onClick={() => this.changeDeadline()}>
              Submit
            </button>
        </div>
      </div>
    )
  }
}

// () => this.changeDeadline == ES6 Anonymous Function
//html markup that is rendered must also be return()ed in react
export default App;

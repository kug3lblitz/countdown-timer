import React, { Component } from 'react';
import Clock from './clock.jsx';
import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'December 24, 2017',
      newDeadline: ''
    }
  }
  //in react, state is always an object. The argument 'props' is also convention.

  changeDeadline(){
    this.setState({deadline: this.state.newDeadline});
  }

  render(){
    return (
      <div className="App">
        <div className="appTitle">
           Countdown: Time Until {this.state.deadline}
        </div>
        <Clock
          deadline={this.state.deadline}
        />
        <div>
            <input
              placeholder='target date'
              onChange={event => this.setState({newDeadline: event.target.value})}
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
//in React, state must *never* be directly manipulated; setState() should be used in place of this practice
export default App;

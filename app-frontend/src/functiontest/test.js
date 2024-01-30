import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    // Initialize state in the constructor
    this.state = {
      counter: 0
    };
  }

  // Function to update the state
  incrementCounter = () => {
    // Use setState to update the state
    this.setState({
      counter: this.state.counter + 1
    });
  }

  render() {
    return (
      <div>
        <p>Counter: {this.state.counter}</p>
        <button onClick={this.incrementCounter}>Increment</button>
      </div>
    );
  }
}

export default MyComponent;
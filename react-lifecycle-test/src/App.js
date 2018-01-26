import React, { Component } from 'react';
import Child from './Child.js';

class App extends Component {
  constructor(props){
    super(props);

    this.countIncrement = this.countIncrement.bind(this);
    this.countDecrement = this.countDecrement.bind(this);

    this.state = {
      count : 3
    };
  }

	countIncrement(msg) {
		this.setState({
      count: this.state.count + 1
    });

    var { childName } = msg;

    console.log(childName);
	}

  countDecrement(){
    this.setState({
      count: this.state.count - 1
    });
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.countDecrement}>-</button>
				<Child childName="first" initNumber={1} onClickIncrement={this.countIncrement}></Child>
        <Child childName="second" initNumber={2} onClickIncrement={this.countIncrement}></Child>
      </div>
    );
  }
}

export default App;

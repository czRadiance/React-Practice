import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Child extends Component {
	constructor(props) {
		super(props);

		this.numberIncrement = this.numberIncrement.bind(this);

		this.state = {
			number: props.initNumber
		};
	}

	numberIncrement() {
		this.setState({
				number: this.state.number + 1
		});

		var msg = {
			childName: this.props.childName,
			number: this.state.number
		};

		this.props.onClickIncrement(msg);
	}

	componentWillReceiveProps(nextProps){
		console.log('enter componentWillReceiveProps ' + this.props.childName);
	}

	render() {
		return (
			<div>
				<button onClick={this.numberIncrement}>+</button>
				<span>number : {this.state.number}</span>
			</div>
		);
	}
}

Child.propTypes = {
	initNumber: PropTypes.number,
	childName: PropTypes.string.isRequired,
	onClickIncrement: PropTypes.func
};

Child.defaultProps = {
	initNumber: 0
};

export default Child;
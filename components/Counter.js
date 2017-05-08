import React, { Component, PropTypes } from 'react';

export default class Counter extends Component {
	constructor(props) {
  		super(props);
  	}

	render() {
    	return (
    		<span>No. of clicks : {this.props.count}</span>
    	);
  }
}
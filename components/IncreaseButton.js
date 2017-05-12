import React, { Component, PropTypes } from 'react';

export default class Button extends Component {
	constructor(props) {
  		super(props);
  	}

	render() {
    	return (
    		<input type="button" value="Click here!" onClick={this.props.inc}/>
    	);
  	}
}
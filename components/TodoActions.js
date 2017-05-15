import React, { Component, PropTypes } from 'react';
import IncreaseButton from '../components/IncreaseButton';

export default class TodoActions extends Component {

  constructor(props) {
  	super(props);
  	this.addTaskHandler = this.addTaskHandler.bind(this);
  	this.resetListHandler = this.resetListHandler.bind(this);
  }

  addTaskHandler() {

  }

  resetListHandler() {

  }

  render() {
    return (
    	<div class="buttons-wrapper">
    		<input type="button" onClick={this.addTaskHandler()} value="Add a Task" />
    		<input type="button" onClick={this.resetListHandler()} value="Reset the List" />	
    	</div>
    );
  }
}

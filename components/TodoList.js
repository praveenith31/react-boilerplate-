import React, { Component, PropTypes } from 'react';
import TodoTask from './TodoTask';

export default class TodoList extends Component {

  constructor(props) {
  	super(props);
  }

  render() {
    return (
    	<ul className="buttons-wrapper">
    		<TodoTask />
    	</ul>
    );
  }
}

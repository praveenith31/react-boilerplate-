import React, { Component, PropTypes } from 'react';
import IncreaseButton from '../components/IncreaseButton';
import {AddTaskAction} from '../actions/TodoActions';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

class TodoActions extends Component {

  constructor(props) {
  	super(props);
  	this.addTaskHandler = this.addTaskHandler.bind(this);
    this.resetListHandler = this.resetListHandler.bind(this);
  	this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    this.refs.AddTaskBtn.style.display = "none";
  }

  addTaskHandler() {
    if (this.refs.addTodoText.value) {
      this.props.AddTaskAction(this.refs.addTodoText.value);
    }
  }

  resetListHandler() {

  }

  handleKeyPress() {
    if(this.refs.addTodoText.value) {
      this.refs.AddTaskBtn.style.display = "block";
    } else {
      this.refs.AddTaskBtn.style.display = "none";
    }
  }

  render() {
    return (
    	<div className="buttons-wrapper">
        <label>Type a task to add to the list</label><br/>
    		<input type="button" ref="AddTaskBtn" onClick={this.addTaskHandler} value="Add a Task" />
        <input type="text" ref="addTodoText" onKeyPress={this.handleKeyPress} />
    		<input type="button" onClick={this.resetListHandler} value="Reset the List" />	
    	</div>
    );
  }
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({AddTaskAction}, dispatch);
};

export default connect(null, matchDispatchToProps)(TodoActions);

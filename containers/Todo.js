import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Connector } from 'react-redux';
import TodoActions from '../components/TodoActions';
import TodoList from '../components/TodoList';
import * as SomeappActions from '../actions/SomeappActions';

export default class TodoApp extends Component {
  render() {
    return (
      <div>
        <TodoActions />
        <TodoList />
      </div>
    );
  }
}

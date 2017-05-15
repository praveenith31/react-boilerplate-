import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Connector } from 'react-redux';
import * as SomeappActions from '../actions/SomeappActions';
import Main from '../components/Main';
import TodoList from './Todo';

export default class Container extends React.Component {
  render() {
    return (
      <div>
      	<Main />
      	<TodoList />
      </div>
    );
  }
}

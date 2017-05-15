import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Connector } from 'react-redux';
import Main from '../components/Main';
import * as SomeappActions from '../actions/SomeappActions';
import SomeApp from './SomeApp';
import TodoList from './Todo';

export default class Container extends React.Component {
  render() {
    return (
      <div>
      	<SomeApp />
      	<TodoList />
      </div>
    );
  }
}

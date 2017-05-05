import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Connector } from 'react-redux';
import Main from '../components/Main';
import * as SomeappActions from '../actions/SomeappActions';

export default class Container extends Component {
  render() {
    return (
      <div>
      	This is the basic page.
      </div>
    );
  }
}

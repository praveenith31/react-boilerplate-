import React, { Component, PropTypes } from 'react';
import { SOME_ACTION } from '../constants/ActionTypes';
import Counter from '../components/Counter';
import IncreaseButton from '../components/IncreaseButton';

export default class Main extends Component {
  /*static propTypes = {
    someapp: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  }*/

  constructor(props) {
  	super(props);
    this.state = {
      counter: 1
    };

    this.incrementCounter = this.incrementCounter.bind(this);
  }

  incrementCounter() {
    this.setState(function(prevState, props) {
      return {
        counter: prevState.counter + 1
      };
    });
  }

  render() {
    return (
    	<div>
    		<Counter count={this.state.counter}/>
      		<IncreaseButton inc={this.incrementCounter}/>	
    	</div>
    );
  }
}

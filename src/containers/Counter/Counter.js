import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { INCREMENT, DECREMENT, ADD, SUB } from '../../constants/actionTypes';
class Counter extends Component {
  state = {
    counter: 0,
  };
  render() {
    return (
      <div>
        <CounterOutput value={this.props.counter} />
        <CounterControl label="Increment" clicked={this.props.onIncrement} />
        <CounterControl label="Decrement" clicked={this.props.onDecrement} />
        <CounterControl label="Add 5" clicked={this.props.onAdd} />
        <CounterControl label="Subtract 5" clicked={this.props.onSub} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ...state,
    // ctr : state.counter
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch({ type: INCREMENT }),
    onDecrement: () => dispatch({ type: DECREMENT }),
    onAdd: () => dispatch({ type: ADD, value: 5 }),
    onSub: () => dispatch({ type: SUB, value: 5 }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);

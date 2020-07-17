import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import {
  INCREMENT,
  DECREMENT,
  ADD,
  SUB,
  STORE_RESULT,
  DELETE_RESULT,
} from '../../constants/actionTypes';
class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.counter} />
        <CounterControl label="Increment" clicked={this.props.onIncrement} />
        <CounterControl label="Decrement" clicked={this.props.onDecrement} />
        <CounterControl label="Add 5" clicked={this.props.onAdd} />
        <CounterControl label="Subtract 5" clicked={this.props.onSub} />
        <hr />
        <button onClick={this.props.onStoreResult}>Store Result</button>
        <ul>
          {this.props.results.map((result) => {
            return (
              <li
                key={result.id}
                onClick={this.props.onDeleteResult.bind(this, result.id)}
              >
                {result.value}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
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
    onStoreResult: () => dispatch({ type: STORE_RESULT }),
    onDeleteResult: (id) => dispatch({ type: DELETE_RESULT, resultElId: id }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);

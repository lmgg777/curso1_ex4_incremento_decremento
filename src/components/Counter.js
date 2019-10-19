import React from "react";
import { connect } from "react-redux";
import {increment, decrement} from "../actions";

const Counter = (props) => {
  return (
    <div className="ui segment">
      <button onClick={props.increment} className="increment">Increment</button>
      <button onClick={props.decrement} className="decrement">Decrement</button>
      <div style={{ marginTop: "10px" }}>
        Current Count: <span>{props.count}</span>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { count: state.count };
};

export default connect(mapStateToProps,
    {increment, decrement}
)(Counter);

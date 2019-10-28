import React from "react";
import { connect } from "react-redux";
import {increment, decrement} from "../actions";

const Counter = (props) => {
  return (
    <div className="ui segment">
      <div className="content">
        <button onClick={() => props.increment()} className="ui primary button">
          Increment
        </button>
        <button onClick={() => props.decrement()} className="ui primary button">
          Decrement
        </button>
        <div style={{ marginTop: "10px" }}>
          <span>Current count: {props.count}</span>
        </div>
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

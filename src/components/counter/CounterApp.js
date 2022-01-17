import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = (props) => {
  const { value } = props;
  const [counter, setCounter] = useState(value);

  const add = () => {
    setCounter(counter + 1);
  };

  const substract = () => {
    setCounter(counter - 1);
  };

  return (
    <React.Fragment>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={substract}>-1</button>
      <button onClick={add}>+1</button>
      <button onClick={() => setCounter(0)}>RESET</button>
    </React.Fragment>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

export default CounterApp;

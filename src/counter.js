import React from 'react';

const Counter = ({counter, inc, dec, rnd}) => {
  return (
    <div className="jumbotron">
      <h2>{counter}</h2>
      <button
        className="btn btn-primary btn-lg mr-1"
        onClick={inc}>INC</button>
      <button
        className="btn btn-primary btn-lg mr-1"
        onClick={dec}>DEC</button>
      <button
        className="btn btn-primary btn-lg"
        onClick={rnd}>RND</button>
    </div>
  );
};

export default Counter;
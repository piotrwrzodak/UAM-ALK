import React, { useState } from 'react';

import alg4 from '../algorithms/alg4';

const Task4 = () => {
  const [n, setN] = useState(0);
  const [output, setOutput] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    let out = alg4(parseInt(n));
    setOutput(out);
  };

  return (
    <>
      <h2 className="heading">Zadanie 4</h2>
      <form onSubmit={submitHandler} className="form">
        <p>
          Wpisz wartość n:
          <input
            type="number"
            min="0"
            name="n"
            className="input"
            placeholder={n}
            onChange={(e) => setN(e.target.value)}
          />
        </p>
        <button type="submit" className="button">
          Generuj dla n={n}
        </button>
      </form>
      {output && (
        <>
          <h3 className="output-size">Number of elements: {output.length}</h3>
          <ul className="output-list">
            {output.map((array, index) =>
              index === 0 ? (
                <li key={index} className="output-list__item">
                  ∅
                </li>
              ) : (
                <li key={index} className="output-list__item">
                  {array}
                </li>
              )
            )}
          </ul>
        </>
      )}
    </>
  );
};

export default Task4;

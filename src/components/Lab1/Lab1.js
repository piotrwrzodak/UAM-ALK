import React, { useState } from 'react';

import alg1 from './algorithms/alg1';

function Lab1() {
  const [n, setN] = useState(1);
  const [k, setK] = useState(1);
  const [output, setOutput] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    let out = alg1(parseInt(n), parseInt(k));
    setOutput(out);
  };

  return (
    <>
      <form onSubmit={submitHandler} className="form">
        <p>
          Wpisz wartość n:
          <input
            type="number"
            min="1"
            name="n"
            className="input"
            placeholder={n}
            onChange={(e) => setN(e.target.value)}
          />
        </p>

        <p>
          Wpisz wartość k:
          <input
            type="number"
            min="1"
            name="k"
            className="input"
            placeholder={k}
            onChange={(e) => setK(e.target.value)}
          />
        </p>
        <button type="submit" className="button">
          Generuj dla n={n} i k={k}
        </button>
      </form>
      {output && (
        <ul className="output-list">
          {output.map((array) => (
            <li key={array} className="output-list__item">
              {array}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Lab1;

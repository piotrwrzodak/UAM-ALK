import React, { useState } from 'react';

import alg2 from '../algorithms/alg2';

const Task2 = () => {
  const [n, setN] = useState(0);
  const [k, setK] = useState(0);
  const [output, setOutput] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    let out = alg2(parseInt(n), parseInt(k));
    setOutput(out);
  };

  return (
    <>
      <h2 className="heading">Zadanie 2</h2>
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

        <p>
          Wpisz wartość k:
          <input
            type="number"
            min="0"
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
      {Number.isInteger(output) && <div className="output-list">{output}</div>}
    </>
  );
};

export default Task2;

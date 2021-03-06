import React, { useState } from 'react';

import alg3 from '../algorithms/alg3';

const Task3 = () => {
  const [n, setN] = useState(1);
  const [k, setK] = useState(1);
  const [output, setOutput] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    let out = alg3(parseInt(n), parseInt(k));
    setOutput(out);
  };

  return (
    <>
      <h2 className="heading">Zadanie 3</h2>
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
            min={n}
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
        <>
          <h3 className="output-size">Number of elements: {output.length}</h3>
          <ul className="output-list">
            {output.map((array) => (
              <li key={array} className="output-list__item">
                {array}
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default Task3;

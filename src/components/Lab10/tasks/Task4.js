import React, { useState } from 'react';

import alg4 from '../algorithms/alg4';

const Task4 = () => {
  const [n, setN] = useState(1);
  const [r, setR] = useState(1);
  const [output, setOutput] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    let out = alg4(n, r);
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
            min="1"
            name="n"
            placeholder={n}
            className="input"
            onChange={(e) => {
              setN(e.target.value);
            }}
          />
        </p>
        <p>
          Wpisz wartość r:
          <input
            type="number"
            min="0"
            name="r"
            placeholder={r}
            className="input"
            onChange={(e) => {
              setR(e.target.value);
            }}
          />
        </p>
        <button type="submit" className="button">
          Generuj dla n={n} i r={r}
        </button>
      </form>
      {output !== null && (
        <>
          <h3 className="output-size">Permutacja:</h3>
          <ul className="output-list">
            <li className="output-list__item">{JSON.stringify(output)}</li>
          </ul>
        </>
      )}
    </>
  );
};

export default Task4;

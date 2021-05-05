import React, { useState } from 'react';

import alg3 from '../algorithms/alg3';

const Task3 = () => {
  const [n, setN] = useState(1);
  const [r, setR] = useState(0);
  const [output, setOutput] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    let out = alg3(n, r);
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
            <li className="output-list__item">{output}</li>
          </ul>
        </>
      )}
    </>
  );
};

export default Task3;

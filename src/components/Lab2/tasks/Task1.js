import React, { useState } from 'react';

import alg1 from '../algorithms/alg1';

const Task1 = () => {
  const [n, setN] = useState(0);
  const [t, setT] = useState(0);
  const [output, setOutput] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    let out = alg1(n, t);
    setOutput(out);
  };

  return (
    <>
      <h2 className="heading">Zadanie 1</h2>
      <form onSubmit={submitHandler} className="form">
        <p>
          Wpisz wartość n:
          <input
            type="number"
            min="1"
            name="n"
            className="input"
            onChange={(e) => {
              setN(e.target.value);
            }}
          />
        </p>
        <p>
          Wpisz podzbiór T:
          <input
            type="number"
            name="n"
            min="0"
            className="input"
            onChange={(e) => setT(e.target.value)}
          />
        </p>
        <button type="submit" className="button">
          Generuj dla n={n}
        </button>
      </form>
      {output !== null && (
        <>
          <h3 className="output-size">Rank: </h3>
          <ul className="output-list">
            <li className="output-list__item">{output}</li>
          </ul>
        </>
      )}
    </>
  );
};

export default Task1;

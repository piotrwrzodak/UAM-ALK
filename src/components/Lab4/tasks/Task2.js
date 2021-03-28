import React, { useState } from 'react';

import alg2 from '../algorithms/alg2';

const Task2 = () => {
  const [n, setN] = useState(1);
  const [k, setK] = useState(1);
  const [t, setT] = useState('');
  const [output, setOutput] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    let out = alg2(n, k, t);
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
          Wpisz wartość k:
          <input
            type="number"
            min="1"
            name="k"
            placeholder={k}
            className="input"
            onChange={(e) => {
              setK(e.target.value);
            }}
          />
        </p>
        <p>
          Wpisz podzbiór T:
          <input
            type="text"
            name="t"
            placeholder="np. 1,3,12"
            pattern="(([0-9]{1,},){1,}||[0-9]{1,})+[0-9]{1,}"
            className="input"
            onChange={(e) => setT(e.target.value)}
          />
        </p>
        <button type="submit" className="button">
          Generuj dla n={n}, k={k} i T={t}
        </button>
      </form>
      {output !== null && (
        <>
          <h3 className="output-size">Rank:</h3>
          <ul className="output-list">
            <li className="output-list__item">{output}</li>
          </ul>
        </>
      )}
    </>
  );
};

export default Task2;

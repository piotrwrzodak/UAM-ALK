import React, { useState } from 'react';

import alg1 from './algorithms/alg1';
import alg2 from './algorithms/alg2';

function Lab1() {
  return (
    <>
      <Zadanie1 />
      <Zadanie2 />
    </>
  );
}

const Zadanie1 = () => {
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
      <h2 className="heading">Zadanie 1</h2>
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
};

const Zadanie2 = () => {
  const [n, setN] = useState(1);
  const [output, setOutput] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    let out = alg2(parseInt(n));
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
};

export default Lab1;

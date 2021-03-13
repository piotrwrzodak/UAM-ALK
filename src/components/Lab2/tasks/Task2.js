import React, { useState } from 'react';

import alg2 from '../algorithms/alg2';

const Task2 = () => {
  const [n, setN] = useState(0);
  const [r, setR] = useState(0);
  const [output, setOutput] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    setOutput(alg2(parseInt(n), parseInt(r)));
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
          Wpisz wartość r:
          <input
            type="number"
            name="r"
            placeholder={r}
            min="0"
            max={2 ** n - 1}
            className="input"
            onChange={(e) => setR(e.target.value)}
          />
        </p>
        <button type="submit" className="button">
          Generuj dla n={n} i r={r}
        </button>
      </form>
      {output && (
        <>
          <h3 className="output-size">Podzbiór: </h3>
          <ul className="output-list">
            {output.length ? (
              <li className="output-list__item">
                {output
                  .reduce((a, b) => {
                    return a.concat(b).concat(',');
                  }, [])
                  .slice(0, -1)}
              </li>
            ) : (
              <li key="empty" className="output-list__item">
                ∅
              </li>
            )}
          </ul>
        </>
      )}
    </>
  );
};

export default Task2;

import React, { useState } from 'react';

import alg3 from '../algorithms/alg3';

const Task1 = () => {
  const [n, setN] = useState(0);
  const [k, setK] = useState(0);
  const [output, setOutput] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    setOutput(alg3(parseInt(n), parseInt(k)));
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
            onChange={(e) => {
              setN(e.target.value);
            }}
          />
        </p>
        <p>
          Wpisz wartość k:
          <input
            type="number"
            name="k"
            min="0"
            className="input"
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
            {/* empty array cant display its elements and its not worth to check 2^n times if it is this set */}
            <li key="empty" className="output-list__item">
              ∅
            </li>
            {output.map((array, index) => (
              <li key={index} className="output-list__item">
                {array
                  .reduce((a, b) => {
                    return a.concat(b).concat(',');
                  }, [])
                  .slice(0, -1)}
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default Task1;

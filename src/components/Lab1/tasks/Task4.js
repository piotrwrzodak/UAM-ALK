import React, { useState } from 'react';

import alg4 from '../algorithms/alg4';

const Task4 = ({ number }) => {
  const [n, setN] = useState(0);
  const [output, setOutput] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    let out = alg4(parseInt(n));
    setOutput(out);
  };

  return (
    <>
      <h2 className="heading">Zadanie {number}</h2>
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
        <button type="submit" className="button">
          Generuj dla n={n}
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

export default Task4;

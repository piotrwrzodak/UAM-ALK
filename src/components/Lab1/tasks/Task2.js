import React, { useState } from 'react';

import alg2 from '../algorithms/alg2';

const Task2 = () => {
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
            // with more than 9 => out of memory error
            max="9"
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
            {output.map((array) => (
              <li key={array} className="output-list__item">
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

export default Task2;

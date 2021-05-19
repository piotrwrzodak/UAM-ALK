import React, { useState } from 'react';

import alg1 from '../algorithms/alg1';

const Task1 = () => {
  const [n, setN] = useState(8);
  const [d, setD] = useState('');
  const [output, setOutput] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    let out = alg1(n, d);
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
            placeholder={n}
            className="input"
            onChange={(e) => {
              setN(e.target.value);
            }}
          />
        </p>
        <p>
          Wpisz wartość d:
          <input
            type="text"
            name="d"
            placeholder="np. 14,16,17,28,38,45,68"
            pattern="(([0-9]{1,},){1,}||[0-9]{1,})+[0-9]{1,}"
            className="input"
            onChange={(e) => setD(e.target.value)}
          />
        </p>
        <button type="submit" className="button">
          Generuj dla n={n} i d={d}
        </button>
      </form>
      {output !== null && (
        <>
          <h3 className="output-size">Kod Prufera:</h3>
          <ul className="output-list">
            <li className="output-list__item">{output}</li>
          </ul>
        </>
      )}
    </>
  );
};

export default Task1;

import React, { useState } from 'react';

import alg2 from '../algorithms/alg2';

const Task2 = () => {
  const [p, setP] = useState('');
  const [output, setOutput] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    let out = alg2(p);
    setOutput(out);
  };

  return (
    <>
      <h2 className="heading">Zadanie 2</h2>
      <form onSubmit={submitHandler} className="form">
        <p>
          Wpisz permutacje P:
          <input
            type="text"
            name="p"
            placeholder="np. 1,2,3"
            pattern="(([0-9]{1,},){1,}||[0-9]{1,})+[0-9]{1,}"
            className="input"
            onChange={(e) => setP(e.target.value)}
          />
        </p>
        <button type="submit" className="button">
          Generuj dla P={p}
        </button>
      </form>
      {output !== null && (
        <>
          <h3 className="output-size">Podział sprzezony:</h3>
          <ul className="output-list">
            <li className="output-list__item">{output}</li>
          </ul>
        </>
      )}
    </>
  );
};

export default Task2;

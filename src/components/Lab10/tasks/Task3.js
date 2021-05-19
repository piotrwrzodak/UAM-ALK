import React, { useState } from 'react';

import alg3 from '../algorithms/alg3';

const Task3 = () => {
  const [p, setP] = useState('');
  const [output, setOutput] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    let out = alg3(p);
    setOutput(out);
  };

  return (
    <>
      <h2 className="heading">Zadanie 3</h2>
      <form onSubmit={submitHandler} className="form">
        <p>
          Wpisz kod Prufera:
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
          <h3 className="output-size">Ranga kodu Prufera:</h3>
          <ul className="output-list">
            <li className="output-list__item">{output}</li>
          </ul>
        </>
      )}
    </>
  );
};

export default Task3;

import React, { useState } from 'react';

import alg3 from '../algorithms/alg3';

const Task3 = () => {
  const [n, setN] = useState(0);
  const [output, setOutput] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    let out = alg3(parseInt(n));
    setOutput(out);
  };

  return (
    <>
      <h2 className="heading">Zadanie 3</h2>
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
          <h3 className="output-size">Funkcje RGF: </h3>
          <ul className="output-list">{JSON.stringify(output)}</ul>
        </>
      )}
    </>
  );
};

export default Task3;

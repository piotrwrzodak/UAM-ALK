import React, { useState } from 'react';

import alg1 from '../algorithms/alg1';

const Task1 = () => {
  const [n, setN] = useState(0);
  const [k, setK] = useState('');
  const [output, setOutput] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    let out = alg1(parseInt(n), k);
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
            min="0"
            name="n"
            className="input"
            placeholder={n}
            onChange={(e) => setN(e.target.value)}
          />
        </p>
        <p>
          Wpisz podzbiory:
          <input
            type="text"
            name="k"
            className="input"
            placeholder={k}
            onChange={(e) => setK(e.target.value)}
          />
        </p>
        <button type="submit" className="button">
          Generuj dla n={n}
        </button>
      </form>
      {output && (
        <>
          <h3 className="output-size">Podzbiór: </h3>
          <ul className="output-list">{JSON.stringify(output)}</ul>
        </>
      )}
    </>
  );
};

export default Task1;

//{3,6,7},{1,2},{5,8,9},{4,10}

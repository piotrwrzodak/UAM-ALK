import React, { useState } from 'react';

function Lab1() {
  const [n, setN] = useState(1);
  const [k, setK] = useState(1);

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`${n} ${k}`);
  };

  return (
    <form onSubmit={submitHandler} className="form">
      <p>
        Wpisz wartość n:
        <input
          type="number"
          min="1"
          name="n"
          className="input"
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
          onChange={(e) => setK(e.target.value)}
        />
      </p>
      <button type="submit" className="button">
        Generuj dla n={n} i k={k}
      </button>
    </form>
  );
}

export default Lab1;

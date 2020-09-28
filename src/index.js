import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Skapa en komponent (function och hooks) som har en variabel numbers, samt en som
// heter total. I numbers hårdkodar du två ental, och total sätter du till 0.
// Komponenten renderar de båda siffrorna i numbers, samt en knapp. När man trycker
// på knappen ska produkten (multiplikation) av de två talen lagras i total, samt
// renderas på sidan.

function CounterHooks(){
  const numbers = [5 , 2];

  //Hooks - useState
  const [total, setTotal] = useState(0);

  //function - call hooks
  function calculate(){
    setTotal(numbers[0] * numbers[1])
  }

  
  return (
    <div className="hooks">
      <p>Counnter Value: {numbers[0]} And {numbers[1]}</p>
      <p>{total}</p>
      <button onClick={() => calculate()}>
        Multiplication
      </button>
    </div>
  )
}

ReactDOM.render(
  <CounterHooks />,
  document.getElementById('root')
);


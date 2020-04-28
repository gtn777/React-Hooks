import React, { useState } from 'react';

function Counter() {
  // Déclare une nouvelle variable d'état, qu’on va appeler « count »
  // Déclare une fonction setCount qui permet de modifier la valeur de count
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <form>
        <label htmlFor="countInit" >Entrer valeur de départ  </label>
        <input id="countInit" type="number" onChange={(event) => { setCount(parseInt(event.target.value, 10)) }} ></input>
      </form>
      
      <p>Le compteur est  à : {count} </p>
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
      <button onClick={() => setCount(count - 1)}>
        -1
      </button>
    </div>
  );
}

export default Counter;
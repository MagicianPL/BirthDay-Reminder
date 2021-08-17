import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {

const [people, setPeople] = useState(data);

const [btnText, setText] = useState("Wyczyść");

const clearAll = ()=> {
  if(people.length === 0) {
    setPeople(data);
    setText("Wyczyść")
  } else {
    setPeople([]);
    setText("Cofnij");
  };
};

  return (
    <main>
      <section className = "container">
        <h3>{people.length} znajomych ma dziś urodziny!</h3>
        <List people={people} />
        <button onClick={clearAll}>{btnText}</button>
      </section>
    </main>
  )
}

export default App;

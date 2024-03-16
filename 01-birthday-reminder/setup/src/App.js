import React, { useState } from "react";
import data from "./data";
import List from "./List";
import "./App.css";
function App() {
  const [people, setPeople] = useState(data);
  return (
    <>
      <main>
        <section className="container">
          <h3 className="length">Today Birthdays : {data.length}</h3>
          <List people={people} />
        </section>
      </main>
    </>
  );
}

export default App;

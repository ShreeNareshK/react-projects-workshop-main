import React from "react";
import "./list.css";
const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <h3 className="name">{name}</h3>
            <h3 className="age">{age}</h3>
          </article>
        );
      })}
    </>
  );
};

export default List;

import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import App from "./App";

const Character = ({ name, height, mass, hairColor, gender, films }) => {
  return (
    <div>
      <span>
        Name: {name} Mass: {height} Height: {mass} HairColor: {hairColor}
        Gender: {gender}
      </span>
    </div>
  );
};

const CharacterList = props => {
  const { data } = props;

  return (
    <div className="Character">
      {props.data.map(el => {
        return (
          <Character
            name={el.name}
            height={el.height}
            mass={el.mass}
            hairColor={el.hair_color}
            gender={el.gender}
          />
        );
      })}
    </div>
  );
};

export default CharacterList;

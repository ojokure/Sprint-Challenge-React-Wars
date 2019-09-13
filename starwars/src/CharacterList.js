import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import App from "./App";
import styled from 'styled-components';


const StyledDiv = styled.div`
  display:flex;
  justify-content:space-evenly;
  margin:20px;
  text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #7ab900,
    0 0 70px #7ab900, 0 0 80px #7ab900, 0 0 100px #7ab900, 0 0 150px #7ab900;
  &:hover {
    color: green;
    font-weight: bold;
  }
`;

const Character = ({ name, height, mass, hairColor, gender, films }) => {
  return (
    <div>
      <StyledDiv>
        Name: {name} Mass: {height} Height: {mass} HairColor: {hairColor}
        Gender: {gender}
      </StyledDiv>
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

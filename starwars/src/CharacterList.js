import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import App from "./App";
import styled from "styled-components";

const StyledDiv = styled.div`
  color: blue;
  text-align: center;
  align-content: center;
  margin: 20px;
  font-family: "ABeeZee";
  width: 100%;
  text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #7ab900,
    0 0 70px #7ab900, 0 0 80px #7ab900, 0 0 100px #7ab900, 0 0 150px #7ab900;
  backdrop-filter: greyscale(0.8);
  background: linear-gradient(
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0.3)
  );
  &:hover {
    color: green;
    font-weight: bold;
  }
`;

const WrapDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  align-content: center;
  &:hover {
    background-position: 0 -500px;
  }
`;

const Character = ({ name, height, mass, hairColor, gender, films }) => {
  return (
    <StyledDiv>
      <div>
        <h3>Name: {name} </h3>
        <p>Mass: {mass} </p>
        <p>Height: {height} </p>
        <p>HairColor: {hairColor} </p>
        <p> Gender: {gender} </p>
      </div>
    </StyledDiv>
  );
};

const CharacterList = ({ data }) => {
  return (
    <WrapDiv className="Character">
      {data.map(el => {
        return (
          <div>
            <Character
              name={el.name}
              height={el.height}
              mass={el.mass}
              hairColor={el.hair_color}
              gender={el.gender}
            />
          </div>
        );
      })}
    </WrapDiv>
  );
};

export default CharacterList;

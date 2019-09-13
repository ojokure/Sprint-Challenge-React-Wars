import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import CharacterList from "./CharacterList";
import styled from "styled-components";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const starWarsApi = "https://swapi.co/api/people/";

  const [Character, setCharacter] = useState([]);

  const styleHeading = {
    color: "#ff5500"
  };

  useEffect(() => {
    axios.get(starWarsApi).then(res => {
      // debugger
      setCharacter(res.data.results);
    });
  }, [Character]);

  return (
    <div className="App">
      <h1 className="Header" style={styleHeading}>
        React Wars
      </h1>
      {<CharacterList data={Character} />}
    </div>
  );
};

export default App;

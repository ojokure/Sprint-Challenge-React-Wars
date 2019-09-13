import React, { useState, useEffect }from 'react';
import './App.css';
import axios from 'axios';
import App from './App';

const Character = ({name, height, mass, hairColor}) =>{

  return (

        <div>

          <p>Name: {name}</p>
          <p>Mass {height}</p>
          <p>Height {mass}</p>
          <p>hairColor {hairColor}</p>
        </div>

  )

}


const CharacterList = (props) => {
        const {data} = props;
    return (
        <div className="Character">
          {props.data.map((el) =>{
              return  <Character name={el.name} height={el.height} mass={el.mass} hairColor={el.hair_color}/>
          })
          }
        </div>
      );
}


export default CharacterList;
import React, { useState, useContext } from 'react';
import Context from '../context/PokeContext.js';
import ChoosePoke from "./ChoosePoke.js";
import TextSquare from "./TextSquare.js";
import Oak from "../images/Oak.png";
import "./Home.css";

const Home = () => {

    const {charArray, bulbArray, squirArray, 
        name, setName, player, 
        setPlayer, rival, setRival,
        pokemon, setPokemon} = useContext(Context);
    
    const [choose, setChoose] = useState(false);
    
    return (
        <div className='ChoosePoke'>
            {choose ? 
            <>
                <ChoosePoke 
                    pokemon={pokemon} 
                    setPokemon={setPokemon} 
                    charmander={charArray} 
                    bulbasaur={bulbArray} 
                    squirtle={squirArray}
                    player={player}
                    setPlayer={setPlayer}
                    rival={rival}
                    setRival={setRival}/>

                <TextSquare 
                    player={player} 
                    setPlayer={setPlayer} 
                    name={name} 
                    setName={setName}
                    choose={choose}
                    setChoose={setChoose} />
            </> : 
            <div className='Oak'>
                <img src={Oak}/>
                <TextSquare 
                    player={player} 
                    setPlayer={setPlayer} 
                    name={name} 
                    setName={setName}
                    choose={choose}
                    setChoose={setChoose} />
            </div>}
            </div>
    ) }

export default Home;


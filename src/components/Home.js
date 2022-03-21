import React, { useState, useEffect, useContext } from 'react';
import PokeCard from "./PokeCard.js";
import Context from '../pokemock.js';
import ChoosePoke from "./ChoosePoke.js";
import TextSquare from "./TextSquare.js";
import Oak from "../images/Oak.png";
import "./Home.css";

const Home = () => {

    const [name, setName] = useState("");
    const [player, setPlayer] = useState({
        name: "",
        pokemon: "",
    });
    const [pokemon, setPokemon] = useState("");
    const [choose, setChoose] = useState(false);
    const {charmander, bulbasaur, squirtle} = useContext(Context);

    useEffect(() => {
        console.log(player);
        console.log(pokemon.name);
    }, [player, pokemon])

    return (
        <div className='ChoosePoke'>
            {choose ? 
            <>
                <ChoosePoke pokemon={pokemon} 
                setPokemon={setPokemon} 
                charmander={charmander} 
                bulbasaur={bulbasaur} 
                squirtle={squirtle}
                player={player}
                setPlayer={setPlayer}/>
                <TextSquare player={player} 
                setPlayer={setPlayer} 
                name={name} 
                setName={setName}
                choose={choose}
                setChoose={setChoose} />
            </> : 
            <div className='Oak'>
                <img src={Oak}/>
                <TextSquare player={player} 
                setPlayer={setPlayer} 
                name={name} 
                setName={setName}
                choose={choose}
                setChoose={setChoose} />
            </div>}
            </div>
    ) }

export default Home;


/*  {player.name !== "" ?
<>
<ChoosePoke setPokemon={setPokemon} charmander={charmander} bulbasaur={bulbasaur} squirtle={squirtle}/>
<TextSquare player={player} setPlayer={setPlayer} name={name} setName={setName}/>
</> : pokemon !== "" ? <PokeCard pokemon={pokemon} player={player} setPlayer={setPlayer}/> : */
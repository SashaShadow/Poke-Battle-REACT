import React from "react";
import PokeCard from "./PokeCard.js";
import Pokeball from "../images/Pokeball.png";

const ChoosePoke = ({pokemon, setPokemon, player, setPlayer, charmander, bulbasaur, squirtle}) => {

    return (
        <div className='PokeballContainer'>
                <div className='PokeBall'>
                    <img src={Pokeball}/>
                    <button onClick={() => setPokemon(charmander)}>Abrir</button>
                </div>
                <div className='PokeBall'>
                    <img src={Pokeball}/>
                    <button onClick={() => setPokemon(bulbasaur)}>Abrir</button>
                </div>
                <div className='PokeBall'>
                    <img src={Pokeball}/>
                    <button onClick={() => setPokemon(squirtle)}>Abrir</button>
                </div>
        {pokemon !== "" && <PokeCard pokemon={pokemon} setPokemon={setPokemon} player={player} setPlayer={setPlayer}/>}
        </div>
    )
}

export default ChoosePoke;
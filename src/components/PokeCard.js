import React from "react";
import "./PokeCard.css";

const PokeCard = ({pokemon, setPokemon, player, setPlayer}) => {

return (
    <div className="PokeCard">
        <div className="photo">
            <p>{pokemon.name} 00{pokemon.no}</p>
            <img src={pokemon.sprite}/>
        </div>
        <div className="desc">
            <p>{pokemon.desc}</p>
        </div>
        <button onClick={() => setPlayer({...player, pokemon: pokemon})}>Elegir este Pokémon</button>
        <button onClick={() => setPokemon("")}>Regresar</button>
    </div>
)

}

export default PokeCard;
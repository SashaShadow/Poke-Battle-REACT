import React, {useState} from "react";
import PokeCard from "./PokeCard.js";
import Pokeball from "../images/Pokeball.png";

const ChoosePoke = ({pokemon, setPokemon, player, setPlayer, rival, setRival, charmander, bulbasaur, squirtle}) => {

    const [view, setView] = useState(true);

    return (
        <div className='PokeballContainer'>
            {view &&
            <>
                <div className='PokeBall'>
                    <img src={Pokeball}/>
                    <button onClick={() => { setPokemon(charmander); setView(false)}}>Abrir</button>
                </div>
                <div className='PokeBall'>
                    <img src={Pokeball}/>
                    <button onClick={() => { setPokemon(bulbasaur); setView(false)}}>Abrir</button>
                </div>
                <div className='PokeBall'>
                    <img src={Pokeball}/>
                    <button onClick={() => { setPokemon(squirtle); setView(false)}}>Abrir</button>
                </div>
            </>}
        {pokemon !== "" && 
        <PokeCard className="PokeCard" 
        pokemon={pokemon} 
        setPokemon={setPokemon} 
        player={player} 
        setPlayer={setPlayer}
        rival={rival}
        setRival={setRival}
        setView={setView}/>}
        </div>
    )
}

export default ChoosePoke;
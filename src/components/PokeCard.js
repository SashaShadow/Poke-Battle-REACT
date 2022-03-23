import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "./PokeCard.css";

const PokeCard = ({pokemon, setPokemon, player, setPlayer, rival, setRival, setView}) => {

const navigate = useNavigate();

useEffect(() => {
    if (rival.pokemon !== "") {
        return navigate("/battle")
    }
}, [rival])

const setPokeView = () => {
    setPokemon("");
    setPlayer({...player, pokemon: ""});
    setRival({...rival, pokemon: ""});
    setView(true);
}

const pokeChoose = () => {
    setPlayer({...player, pokemon: pokemon[0]});
    setRival({...rival, pokemon: pokemon[1]});
}

return (
    <div className="PokeCard">
        <div className="photo">
            <p>{pokemon[0].name} 00{pokemon[0].no}</p>
            <img src={pokemon[0].sprite}/>
        </div>
        <div className="desc">
            <p>{pokemon[0].desc}</p>
        </div>
        <button onClick={() => pokeChoose()}>Elegir este Pokémon</button>
        <button onClick={() => setPokeView()}>Regresar</button>
    </div>
)

}

export default PokeCard;
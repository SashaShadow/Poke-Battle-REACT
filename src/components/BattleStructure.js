import React, { useState, useContext} from "react";
import Context from '../context/PokeContext.js';
import { Link } from "react-router-dom";
import PreBattleText from "./PreBattleText.js";
import "./BattleStructure.css";

const BattleStructure = () => {

    const [battle, setBattle] = useState(false);
    const {player, rival} = useContext(Context);



    if (!player.pokemon && battle === false) {
        return (
            <>
        <h2>No has ingresado tu nombre ni seleccionaste un Pokémon</h2>
        <Link className="linkTo" to={"/"}>Volver al inicio</Link>
        </>
        )
    }

    return (
        <>
        {player.pokemon &&
        <>
        <div className="Battle">
            <div className="Rival">
                <div className="RivalPoke">
                    <img src={rival.sprite}/>
                </div> 
            </div>
            <div className="Player">
                <div className="PlayerSprite">
                    <img src={player.sprite}/>
                </div> 
            </div>
            <div className="BattleMenu">
                <div className="BattleText">
                    <PreBattleText setBattle={setBattle}/>
                </div>
            </div>
        </div>
        
        </>}
        {battle && 
        <div className="Battle">
            <div className="Rival">
                <div className="RivalPoke">
                    <img src={rival.pokemon.sprite}/>
                </div>    
            </div>
            <div className="Player">
                <div className="PlayerPoke">
                    <img src={player.pokemon.backsprite}/>
                </div>
            </div>
            <div className="BattleMenu">
                <div className="BattleText">
                    <h3>¿Que hará {player.pokemon.name}?</h3>
                </div>
                <div className="BattleOptions">
                    <div><button><h3>FIGHT</h3></button></div>
                    <div><h3>POKéMON</h3></div>
                    <div><h3>ITEM</h3></div>
                    <div><h3>RUN</h3></div>
                </div>
            </div>
        </div>}
        </>
    )
}

export default BattleStructure;
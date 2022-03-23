import React from "react";
import Typewriter from "typewriter-effect";

const PreBattleText = ({setBattle}) => {
    
    return (
        <>
        <Typewriter onInit={(typewriter)=> {typewriter
            .changeDelay(50)
            .typeString("¡Gary quiere desafiarte a una pelea!")
            .deleteAll(0.000001)
            .pauseFor(250)
            .typeString(`"¡Probemos nuestros nuevos Pokémon"`)
            .pauseFor(200)
            .start();}}/>
        <button onClick={() => setBattle(true)}>Saltar y pelear</button>
        </>
    )
}

export default PreBattleText;
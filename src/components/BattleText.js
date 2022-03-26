import React from "react";
import Typewriter from "typewriter-effect";

const BattleText = ({player, movep, rival, mover}) => {

    const msgr = () => {
        if (mover.name === "GROWL") {
            return `¡El ataque de ${player.pokemon.name} bajó!`
        } else if (mover.name === "TAIL WHIP") {
            return `¡La defensa de ${player.pokemon.name} bajó!`
        } else if (mover.name === "SCRATCH") {
            return `No es muy efectivo...`
        } else if (mover.name === "TACKLE") {
            return `No es muy efectivo...`
        }
    }

    const msgp = () => {
        if (movep.name === "GROWL") {
            return `¡El ataque de ${rival.pokemon.name} bajó!`
        } else if (movep.name === "TAIL WHIP") {
            return `¡La defensa de ${rival.pokemon.name} bajó!`
        } else if (movep.name === "SCRATCH") {
            return `No es muy efectivo...`
        } else if (movep.name === "TACKLE") {
            return `No es muy efectivo...`
        }
    }

    return (
        <>
        <Typewriter onInit={(typewriter)=> {typewriter
            .changeDelay(50)
            .typeString(`${player.pokemon.name} uso ${movep.name}`)
            .pauseFor(1000)
            .deleteAll(0.1)
            .typeString(`${msgp()}`)
            .pauseFor(2000)
            .deleteAll(0.1)
            .typeString(` ${rival.pokemon.name} uso ${mover.name}`)
            .pauseFor(1000)
            .deleteAll(0.1)
            .typeString(`${msgr()}`)
            .start();}}/> 
        </>
    )
}

export default BattleText;
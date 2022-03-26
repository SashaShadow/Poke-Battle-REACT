import React, {useState, useEffect} from "react";
import Charmander from "../images/Charmander.png";
import Bulbasaur from "../images/Bulbasaur.png";
import Squirtle from "../images/Squirtle.PNG";
import CharmanderB from "../images/Charmanderback.PNG";
import BulbasaurB from "../images/Bulbasaurback.PNG";
import SquirtleB from "../images/Squirtleback.PNG";
import Gary from "../images/Blue.png";
import Ash from "../images/Red.png";

const Context = React.createContext();

export const PokeContext = ({children}) => {

    const [name, setName] = useState("");
    const [player, setPlayer] = useState({
        name: "",
        pokemon: "",
        sprite: Ash,
    });
    const [rival, setRival] = useState({
        name: "Gary",
        pokemon: "",
        sprite: Gary,
    });
    const [pokemon, setPokemon] = useState("");
   
//Attacks && moves
const Tackle = {
    name: "TACKLE",
    power: 40,
    pp: 35,
}

const Scratch = {
    name: "SCRATCH",
    power: 40,
    pp: 35,
}

const Growl = {
    name: "GROWL",
    power: "-",
    pp: 40,
    desc: "Decrease atk of opponent by 1"
}

const TailWhip = {
    name: "TAIL WHIP",
    power: "-",
    pp: 30,
    desc: "Decrease atk of opponent by 1"
}

const random = () =>{
    return Math.floor(Math.random() * (2));
}

//Available Pokémons
const charmander = {
    name: "Charmander",
    hp: 39,
    totalhp: 39,
    atk: 52,
    def: 43,
    speed: 65,
    special: 50,
    moves: [Scratch, Growl],
    level: 5,
    no: 4,
    sprite: Charmander,
    backsprite: CharmanderB,
    desc: "Prefiere los sitios calientes. Dicen que cuando llueve sale vapor de la punta de su cola.",
    type: "fire",
}

const bulbasaur = {
    name: "Bulbasaur",
    hp: 45,
    totalhp: 45,
    atk: 49,
    def: 49,
    speed: 45,
    special: 65,
    moves: [Tackle, Growl],
    level: 5,
    no: 1,
    sprite: Bulbasaur,
    backsprite: BulbasaurB,
    desc: "Una rara semilla fue plantada en su espalda al nacer. La planta brota y crece con este Pokèmon.",
    type: "grass",
}

const squirtle = {
    name: "Squirtle",
    hp: 44,
    totalhp: 44,
    atk: 48,
    def: 65,
    speed: 43,
    special: 50,
    moves: [Tackle, TailWhip],
    level: 5,
    no: 7,
    sprite: Squirtle,
    backsprite:  SquirtleB,
    desc: "Tras nacer, su espalda se hincha y endurece como una concha. Echa potente espuma por la boca.",
    type: "water",
}

//Damage calculation formula
const damage = (pokemonp, pokemonr, move) => {
    let dam = Math.floor((((2*pokemonp.level/5 + 2) * move.power * pokemonp.atk / pokemonr.def) / 50 + 2) * ((Math.random() * (255 - 217) + 217)/ 255))
    return dam
}

//Opposite type Pokemon pairs
const charArray = [charmander, squirtle]
const bulbArray = [bulbasaur, charmander]
const squirArray = [squirtle, bulbasaur]

    return <Context.Provider value={{charArray, bulbArray, squirArray, name, 
    setName, player, setPlayer, rival, setRival, pokemon, setPokemon, damage,Tackle, Scratch, TailWhip, Growl, random}}>
        {children}
    </Context.Provider>

}

export default Context;


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
   
    useEffect(() => {
        console.log(player);
        console.log(rival);
    }, [player]) 

const charmander = {
    name: "Charmander",
    hp: 39,
    atk: 52,
    def: 43,
    speed: 65,
    special: 50,
    moves: ["scratch", "growl"],
    level: 5,
    no: 4,
    sprite: Charmander,
    backsprite: CharmanderB,
    desc: "Obviously prefers hot places. When it rains, steam is said to spout from the tip of its tail.",
    type: "fire",
}

const bulbasaur = {
    name: "Bulbasaur",
    hp: 45,
    atk: 49,
    def: 49,
    speed: 45,
    special: 65,
    moves: ["tackle", "growl"],
    level: 5,
    no: 1,
    sprite: Bulbasaur,
    backsprite: BulbasaurB,
    desc: "A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon.",
    type: "grass"
}

const squirtle = {
    name: "Squirtle",
    hp: 44,
    atk: 48,
    def: 65,
    speed: 43,
    special: 50,
    moves: ["tackle", "tail whip"],
    level: 5,
    no: 7,
    sprite: Squirtle,
    backsprite:  SquirtleB,
    desc: "After birth, its back swells and hardens into a shell. Powerfully sprays foam from its mouth.",
    type: "water",
}

const charArray = [charmander, squirtle]
const bulbArray = [bulbasaur, charmander]
const squirArray = [squirtle, bulbasaur]

    return <Context.Provider value={{charArray, bulbArray, squirArray, name, setName, player, setPlayer, rival, setRival, pokemon, setPokemon}}>
        {children}
    </Context.Provider>

}

export default Context;


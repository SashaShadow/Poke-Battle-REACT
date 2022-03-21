import React from "react";
import Charmander from "./images/Charmander.png";

const Context = React.createContext();

export const PokeContext = ({children}) => {

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
    backsprite: "",
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
    sprite: "",
    backsprite: "",
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
    sprite: "",
    backsprite: "",
    desc: "After birth, its back swells and hardens into a shell. Powerfully sprays foam from its mouth.",
    type: "water",
}

    return <Context.Provider value={{charmander, bulbasaur, squirtle}}>
        {children}
    </Context.Provider>

}

export default Context;


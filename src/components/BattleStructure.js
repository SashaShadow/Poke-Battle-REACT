import React, { useState, useContext, useEffect} from "react";
import Context from '../context/PokeContext.js';
import { Link } from "react-router-dom";
import PreBattleText from "./PreBattleText.js";
import BattleText from "./BattleText.js";
import "./BattleStructure.css";

const BattleStructure = () => {

    const [battle, setBattle] = useState(false);
    const [moveMenu, setMoveMenu] = useState(false);
    const {player, rival, setPlayer, setRival, damage, random, setPokemon} = useContext(Context);
    const [atk, setAtk] = useState([false, ""]); //inicio del ataque del player
    const [atk2, setAtk2] = useState([]) //ataques de ambos jugadores guardados
    const [rivalAtk, setRivalAtk] = useState([false, ""]); //inicio del ataque del rival
    const [battleText, setBattleText] = useState(false);
    const [final, setFinal] = useState(false);


    //promesa que ejecuta el atk del player
    const atkPromise = () => {
        return new Promise(resolve => {
        setTimeout(() => {
            let updRival = rival;
                updRival.pokemon.hp -= damage(player.pokemon, rival.pokemon, atk[1])
            resolve(updRival);
        }, 2200)
    })}

    //promesa que ejecuta el atk del rival
    const defPromise = () => {
        return new Promise(resolve => {
        setTimeout(() => {
            let updRival = player;
                updRival.pokemon.hp -= damage(rival.pokemon, player.pokemon, rivalAtk[1])
            resolve(updRival);
        }, 7000)
    })}

    const growlPPromise = () => {
        return new Promise(resolve => {
        setTimeout(() => {
            let updRival = rival;
                updRival.pokemon.atk -= 1;
            resolve(updRival);
        }, 2200)
    })}

    const tailPPromise = () => {
        return new Promise(resolve => {
        setTimeout(() => {
            let updRival = rival;
                updRival.pokemon.def -= 1
            resolve(updRival);
        }, 2200)
    })}

    const growlRPromise = () => {
        return new Promise(resolve => {
        setTimeout(() => {
            let updPlayer = player;
                updPlayer.pokemon.atk -= 1
            resolve(updPlayer); 
        }, 8000)
    })}

    const tailRPromise = () => {
        return new Promise(resolve => {
        setTimeout(() => {
            let updPlayer = player;
                updPlayer.pokemon.def -= 1
            resolve(updPlayer);
        }, 7000)
    })}

    //promesa que vuelve al menu para elegir el move
    const backToMenu = () => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(console.log("Lets fight!!"))
            }, 12500)
        })
    }

    const playAgain = () => {
        let newPlayer = player;
        newPlayer.name = "";
        let newRival = rival;
        newRival.pokemon = "";
        setPlayer(newPlayer)
        setRival(newRival);
        setFinal(false);
        setPokemon("");
    }

    useEffect(() => {
        setAtk2([atk[1], rivalAtk[1]]);
        if (atk[1].name === "TACKLE" || atk[1].name === "SCRATCH") {
            atkPromise().then((response) => {
                setAtk([false, ""])
                setRival(response);
                let newPlayer = player;
                newPlayer.pokemon.moves[0].pp -= 1;
                setPlayer(newPlayer);
            }).then(() => {
                if (rivalAtk[1].name === "TACKLE" || rivalAtk[1].name === "SCRATCH") {
                    defPromise().then(response => {
                        setRivalAtk([false, ""])
                        setPlayer(response);
                    })
                } else if (rivalAtk[1].name === "GROWL") {
                    growlRPromise().then(response => {
                        setRivalAtk([false, ""])
                        setPlayer(response);
                    })
                } else if (rivalAtk[1].name === "TAIL WHIP") {
                    tailRPromise().then(response => {
                        setRivalAtk([false, ""])
                        setPlayer(response);
                    }
                    )} 
            }).finally(() => {
                backToMenu().then(() => {
                    setBattleText(false);
                    setAtk2([]);
                })
            })
        } else if (atk[1].name === "GROWL") {
            growlPPromise().then((response) => {
                setAtk([false, ""])
                setRival(response);
                let newPlayer = player;
                newPlayer.pokemon.moves[1].pp -= 1;
                setPlayer(newPlayer);
            }).then(() => {
                if (rivalAtk[1].name === "TACKLE" || rivalAtk[1].name === "SCRATCH") {
                    defPromise().then(response => {
                        setRivalAtk([false, ""])
                        setPlayer(response);
                    })
                } else if (rivalAtk[1].name === "GROWL") {
                    growlRPromise().then(response => {
                        setRivalAtk([false, ""])
                        setPlayer(response);
                    })
                } else if (rivalAtk[1].name === "TAIL WHIP") {
                    tailRPromise().then(response => {
                        setRivalAtk([false, ""])
                        setPlayer(response);
                    }
                    )}  
            }).finally(() => {
                backToMenu().then(() => {
                    setBattleText(false);
                    setAtk2([]);
                })
            })
        } else if (atk[1].name === "TAIL WHIP") {
            tailPPromise().then((response) => {
                setAtk([false, ""])
                setRival(response);
                let newPlayer = player;
                newPlayer.pokemon.moves[1].pp -= 1;
                setPlayer(newPlayer);
            }).then(() => {
                if (rivalAtk[1].name === "TACKLE" || rivalAtk[1].name === "SCRATCH") {
                    defPromise().then(response => {
                        setRivalAtk([false, ""])
                        setPlayer(response);
                    })
                } else if (rivalAtk[1].name === "GROWL") {
                    growlRPromise().then(response => {
                        setRivalAtk([false, ""])
                        setPlayer(response);
                    })
                } else if (rivalAtk[1].name === "TAIL WHIP") {
                    tailRPromise().then(response => {
                        setRivalAtk([false, ""])
                        setPlayer(response);
                    }
                    )}   
            }).finally(() => {
                backToMenu().then(() => {
                    setBattleText(false);
                    setAtk2([]);
                })
            })
        }
    }, [atk])

    useEffect(() => {
        if (player.pokemon.hp <= 0 || rival.pokemon.hp <= 0) {
            setFinal(true)
        }
    }, [player.pokemon.hp, rival.pokemon.hp])
    

    if (!player.pokemon && !battle) {
        return (
            <>
        <h2>No has ingresado tu nombre ni seleccionaste un Pokémon</h2>
        <Link className="linkTo" to={"/play"}>Volver al inicio</Link>
        </>
        )
    }

    return (
        <>

        {/*parte donde Gary te quiere desafiar*/}
        {player.pokemon && !battle && !final &&
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
        
        {/*Pelea en si*/}
        {battle && !final &&
        <div className="Battle">
            <div className="Rival">
                <div className="RivalPoke">
                    <img src={rival.pokemon.sprite}/>
                </div>    
                <div className="PokeRInfo">
                    <h3>{rival.pokemon.name}</h3>
                    <h3>:L{rival.pokemon.level}</h3>
                    <h3>{rival.pokemon.hp}/{rival.pokemon.totalhp}</h3>
                </div>
            </div>
            <div className="Player">
                <div className="PlayerPoke">
                    <img src={player.pokemon.backsprite}/>
                </div>
                <div className="PokePInfo">
                    <h3>{player.pokemon.name}</h3>
                    <h3>:L{player.pokemon.level}</h3>
                    <h3>{player.pokemon.hp}/{player.pokemon.totalhp}</h3>
                </div>
            </div>
            <div className="BattleMenu">
                {!moveMenu && battleText && 
                <> 
                <div className="BattleText">
                    <BattleText player={player} movep={atk2[0]} rival={rival} mover={atk2[1]}/> 
                </div>
                <div className="BattleOptions">

                </div>
                </>
                }

                {/*Pre eleccion de movimiento*/}
                {!moveMenu && !battleText &&
                <>
                <div className="BattleText">
                    <h3>¿Que hará {player.pokemon.name}?</h3>
                </div>
                <div className="BattleOptions">
                    <button onClick={() => setMoveMenu(true)}><h3>FIGHT</h3></button>
                    <h3>POKéMON</h3>
                    <h3>ITEM</h3>
                    <h3>RUN</h3>
                </div>
                </>}

                {/*Eleccion del movimiento*/}
                {moveMenu && 
                <>
                <div className="BattleText">
                    <button onClick={() => 
                        { if (player.pokemon.moves[0].pp > 0) {
                            setAtk([true, player.pokemon.moves[0]]); setRivalAtk([true, rival.pokemon.moves[random()]]); 
                        setBattleText(true); setMoveMenu(false)}}}>
                            <h3>{player.pokemon.moves[0].name}</h3></button><p>-</p>
                    <button onClick={() => 
                        { if (player.pokemon.moves[1].pp > 0) {
                            setAtk([true, player.pokemon.moves[1]]); setRivalAtk([true, rival.pokemon.moves[random()]]); 
                        setBattleText(true); setMoveMenu(false)}}}>
                            <h3>{player.pokemon.moves[1].name}</h3></button>
                </div>
                <div className="MovesInfo">
                    <h3>PP: {player.pokemon.moves[0].pp}</h3>
                    <p>-</p>
                    <h3>PP: {player.pokemon.moves[1].pp}</h3>
                    <button className="GoBack" onClick={() => setMoveMenu(false)}>←</button>
                </div>
                </>}

            </div>
        </div>}

        {final && player.pokemon.hp <= 0 ? 
                <>
                <div>
                    <h1>Gary ha ganado</h1>
                    <Link onClick={() => playAgain()} className="linkTo" to={"/play"}>Volver a jugar</Link>
                </div>
                </> :
                final && rival.pokemon.hp <= 0 && 
                <>
                <h1>¡Has ganado la pelea!</h1>
                <Link onClick={() => playAgain()} className="linkTo" to={"/play"}>Volver a jugar</Link>
                </>}
        </>
    )
}

export default BattleStructure;
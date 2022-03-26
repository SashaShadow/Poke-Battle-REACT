import React from "react";
import "./Welcome.css";
import { Link } from "react-router-dom";


const Welcome = () => {

    return (
        <div className="WelcomeContainer">
            <h1 className="Title First">¡Bienvenido a PokeBattle REACT!</h1>
            <Link to={"/play"} className="Y">JUGAR</Link>
            <h3 className="Title">Idea</h3>
            <p>La motivación de esta pequeña app surge tras un deseo de recrear nostálgicamente
                los juegos de Pokémon representativos de la infancia de muchas personas de los 
                años 90 en adelante, lanzados en un comienzo en las consolas GameBoy.
                No queriendo ser demasiado abarcativo, me limité a revivir la primer pelea que se
                tiene en los juegos de la primera generación: contra el rival, en Red & Blue llamado
                Blue, en Yellow version llamado Gary (como en el animé). Decidí dejarle ese nombre.
            </p>
            <h3 className="Title">Jugabilidad</h3>
            <p>Pensado de una manera intuitiva, lo único que hay que realizar en esta app es elegir un Pokémon
                de los tres iniciales. Luego de eso el rival directamente desafiará a una pelea al jugador.
                Tal y como en los juegos originales, solo se podrán utilizar dos ataques, sin poder utilizar items,
                cambiar de Pokémon o huir de la pelea. Una vez uno de los dos Pokémon quede con 0 de HP la pelea terminará
                y se dará la opción de volver a iniciar.
                Esta página esta diseñada para ser utilizada en una computadora. Sin embargo, si deseas entrar desde un smartphone
                pon la pantalla de forma horizontal para una mejor experiencia visual.
            </p>
            <h3 className="Title">Tecnologías usadas</h3>
            <p>Como el nombre de la app lo indica, se utilizó React.js para el armado de la interfaz de la 
                página, asi como para su funcionalidad, seteado de estados y demás hooks. Para esta aplicacion
                podría llegar a usarse en un futuro la PokeAPI para un uso de nuevos Pokémon. En este caso no lo
                consideré necesario ya que solo se utilizan los Pokémon iniciales de la primera generación de 
                juegos: Bulbasaur, Squirtle y Charmander. Por lo mismo tampoco se utiliza ningún tipo de base de 
                datos para almacenar información.
                Se utiliza el package typewritter-effect para dar movilidad a los textos.
            </p>


        </div>
    )
}

export default Welcome;
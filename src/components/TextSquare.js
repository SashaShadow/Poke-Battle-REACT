import React, {useState} from "react";
import Typewriter from "typewriter-effect";

const TextSquare= ({player, setName, setPlayer, name, choose, setChoose}) => {

    const [loader, setLoader] = useState(false);

    const handleName = (e) => {
        e.preventDefault()
        setPlayer({ ...player, name: name });
    }   

return (
    <div className='Text'>
        {!loader && player.name === "" && !choose &&
        <>
        <Typewriter onInit={(typewriter)=> {typewriter
                    .changeDelay(50)
                    .typeString("¡Bienvenido a mi laboratorio!")
                    .pauseFor(250)
                    .typeString(" Mi nombre es OAK, ")
                    .pauseFor(200)
                    .typeString("me llaman el profesor Pokémon, ")
                    .pauseFor(200)
                    .typeString("¿cómo era tu nombre?")
                    .start();}}/>
        <button onClick={() => setLoader(true)}>Continuar</button>  
        </>
        }
        
        {loader && player.name === "" && !choose &&
        <form>
            <input type="text" onChange={({ target }) => setName(target.value)}/>
            <button type='submit' onClick={handleName}>Confirmar</button>
        </form>
        }

        {player.name !== "" && choose === false &&
        <>
            <Typewriter onInit={(typewriter)=> {typewriter
                .changeDelay(50)
                .typeString(`${player.name}...`)
                .pauseFor(500)
                .typeString(" ¡Cierto! Ya recordé tu nombre. ")
                .deleteAll(1)
                .pauseFor(500)
                .typeString("Este mundo está habitado por criaturas llamadas Pokémon... ")
                .pauseFor(500)
                .deleteAll(1)
                .typeString("Para algunas personas son mascotas. ")
                .pauseFor(250)
                .typeString("Otros los utilizan para pelear. ")
                .pauseFor(500)
                .typeString("En mi caso los investigo y estudio.")
                .pauseFor(500)
                .deleteAll(1)
                .pauseFor(2000)              
                .start();}}/>
            <button onClick={() => setChoose(true)}>Saltar</button>            
        </>}

        {choose === true && 
        <Typewriter onInit={(typewriter) => {typewriter
            .changeDelay(50)
            .typeString("Ahora podrás elegir tú un Pokémon. Hazlo con cuidado.")
            .start();}}/>
        }
    </div>
)

}

export default TextSquare;
import { useState } from 'react';


const useArrayText = () => {

    const [ arrayText ] = useState([`¡Hola, Bienvenido este es el mundo POKéMON!`,`¡Me llamo OAK!`,`¡Pero la gente me llama PROFESOR POKéMON!`,`¡Este mundo esta habitado por unas criaturas`,`llamadas POkéMON!`,`Yo estudio a los POKéMON, y e preparado`,`una enciclopdia llamada POKéDEX.`,`Pero antes de verla cuentame algo de ti`,`¿Eres un chico o una chica?`,`¿Dime cual es tu nombre?`]);

    return { arrayText };
};

export default useArrayText;
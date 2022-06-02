import  { React,useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import TypeImg from './TypeImg';

const TypePokemon = ({url}) => {

    const [pokemon,setPokemon] = useState([])

    const navigate = useNavigate();

    useEffect(()=>{

        axios.get(`${url}`)
        .then(res => setPokemon(res.data))
        .catch(error => console.log(error))

    },[url])


    return (
        <div>
            <div className='desktop type'>
                <div onClick={()=>{
                    navigate(`/pokedex/${pokemon?.id}`)
                }}>
                    <TypeImg pokemon={pokemon} />
                </div>
            </div>
        </div>
    );
};

export default TypePokemon;
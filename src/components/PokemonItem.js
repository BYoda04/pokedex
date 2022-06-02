import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';

const PokemonItem = () => {

    const { id } = useParams()
    const [pokemon,setPokemon] = useState([])
    const navigate = useNavigate();

    useEffect(()=>{

        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => setPokemon(res.data))
        .catch(error => console.log(error))

    },[id])

    console.log(pokemon)

    return (
        <div className='pokedex-container'>
            <div className='header'>
                <div>
                    <div className='back-button' onClick={()=>{
                        navigate(-1)
                    }}><ion-icon name="arrow-back-outline"></ion-icon></div>
                </div>
                <div className='trapecio'></div>
            </div>
            <div className='pokemon-container desktop'>
                <div className='pokemon-img'>
                    <div className='bg-img-item'>
                        <div>
                            <h3>{pokemon?.name}</h3>
                        </div>
                        <div>
                            <img src={pokemon.sprites?.front_default} alt="img"/>
                        </div>
                    </div>
                </div>
                <div className='description-container'>
                    <div className='type-container one'>
                        <p>TYPE</p>
                        <div>{pokemon.types?.map(e=>(
                        <p key={e.slot}>{e.type?.name}</p>
                    ))}</div>
                    </div>
                    <div className='type-container two'>
                        <p>Height: <br/>{pokemon?.height}</p>
                        <p>Weight: <br/>{pokemon?.weight}</p>
                    </div>
                </div>
                <div className='pokemon-img'>
                    <div className='bg-img-item'>
                        <div>
                            <h3>SHINY</h3>
                        </div>
                        <div>
                            <img src={pokemon.sprites?.front_shiny} alt="img"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PokemonItem;
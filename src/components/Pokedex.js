import  { React, useEffect, useState } from 'react';
import PokemonContainer from './PokemonContainer';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { type } from '../store/slices/url.slice'
import { useDispatch } from 'react-redux';

const Pokedex = () => {

    const { register, handleSubmit, reset } = useForm()
    const navigate = useNavigate()
    const [option,setOption] = useState([])
    const dispatch = useDispatch()

    const defaultValue = {name:""}
    let proob = ""

    const searchPokemon = data=>{
        proob = data.name
        if (proob.trim() !== "") {
            navigate(`/pokedex/${proob.trim()}`)
            reset(defaultValue)
        }
    }

    const searchType = data=>{
        if (data.type !== "") {
            dispatch(type(`https://pokeapi.co/api/v2/type/${data.type}`))
        } else {
            dispatch(type(`https://pokeapi.co/api/v2/type/normal`))
        }
    }

    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/type/`)
        .then(res => setOption(res.data.results))
        .catch(error => console.log(error))
    },[])


    return (
        <div className='pokedex-container'>
            <div className='header'>
                <div>
                    <div></div>
                    <div>
                        <form className='search-content' onSubmit={handleSubmit(searchPokemon)}>
                            <input type="text" {...register("name")}/>
                            <button><ion-icon name="search-outline"></ion-icon></button>
                        </form>
                    </div>
                    <div></div>
                </div>
                <div className='trapecio'>
                    <form className='select-content' onSubmit={handleSubmit(searchType)}>
                        <select {...register("type")}>
                            {option?.map(e=>(
                                <option key={e?.name}>{e?.name}</option>
                            ))}
                        </select>
                        <button><ion-icon name="search-outline"></ion-icon></button>
                    </form>
                </div>
            </div>
            <PokemonContainer />
        </div>
    );
};

export default Pokedex;
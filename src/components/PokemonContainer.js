import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useState,useEffect } from 'react';
import axios from 'axios';
import ListItem from './ListItem'
import { increment,decrement,valueMin,valueMax } from '../store/slices/index.slice'
import TypeList from './TypeList';

const PokemonContainer = () => {

    const user = useSelector(state=>state.nameUser)
    const id = useSelector(state=>state.index)
    const [list,setList] = useState([])
    const [type,setType] = useState([])
    const dispatch = useDispatch()
    const url = useSelector(state=>state.url)

    useEffect(()=>{
        if (url !== null) {
            axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${id}&limit=4%22`)
            .then(res => setList(res.data.results))
            .catch(error => console.log(error))
            axios.get(`${url}`)
            .then(res => setType(res.data.pokemon))
            .catch(error => console.log(error))
            console.log(url)
        } else {
            axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${id}&limit=4%22`)
            .then(res => setList(res.data.results))
            .catch(error => console.log(error))
        }
    },[id,url])

    return (
        <div className='pokemon-container'>
            <div className='name-container'>
                <h3>WELCOME {user}!</h3>
            </div>
            <div className='desktop'>
                {type.length !== 0?
                    <>
                        <TypeList list={type}/>
                    </>
                    :
                    <>
                        <div className='pokemon-img'>
                            <div className='bg-img'>
                                <div>
                                    <h3>{list[0]?.name }</h3>
                                </div>
                                <div>
                                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id+1}.png`} alt={list[0]?.name}/>
                                </div>
                            </div>
                        </div>
                        <div className='list-pokemon-container'>
                            <button className='row-direction' onClick={()=>{
                                    id-1 < 0? dispatch(valueMin()) : dispatch(decrement())
                                }}>
                                <ion-icon name="chevron-back-outline"></ion-icon>
                            </button>
                            <div className='list-pokemons'>
                                <ul>
                                    {list?.map(e=>(
                                        <ListItem pokemon={e} key={e.name}/>
                                    ))}
                                </ul>
                            </div>
                            <button className='row-direction' onClick={()=>{
                                    id+5 > 10228? dispatch(valueMax()) : dispatch(increment())
                                }}>
                                <ion-icon name="chevron-forward-outline"></ion-icon>
                            </button>
                        </div>
                    </>
                }
            </div>
        </div>
    );
};

export default PokemonContainer;
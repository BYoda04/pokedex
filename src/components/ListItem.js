
import { React,useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const ListItem = ({pokemon}) => {

    const [url] = useState(pokemon.url)
    const [item,setItem] = useState([])

    const navigate = useNavigate();

    useEffect(() => {

        axios.get(url)
        .then(res => setItem(res.data))
        .catch(error => console.log(error))

    },[url])

    return (
        <li name="item" onClick={()=>{
            navigate(`/pokedex/${item?.id}`)
        }}>
            <p>{item?.id}</p>
            <p>{item?.name}</p>
            <p className="sprite">{item.sprites?.front_default}</p>
        </li>
    );
};

export default ListItem;
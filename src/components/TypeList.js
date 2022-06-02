import  { React, useEffect, useState } from 'react';
import Pagination from './Pagination';
import TypePokemon from './TypePokemon'

const TypeList = ({list}) => {

    const [posts,setPost] = useState([])
    const [currentPage,setCurrentPage] = useState(1)
    const [postsPerPage] = useState(10)

    useEffect(()=>{
        setPost(list)
    },[list])

    const indexLastPost = currentPage * postsPerPage
    const indexFirstPost = indexLastPost - postsPerPage
    const currentPost = posts.slice(indexFirstPost,indexLastPost)

    const paginate = (pageNumber)=> setCurrentPage(pageNumber)

    return (
        <div className='type-container-list'>
            <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
            <div className='type-form'>
                {currentPost?.map(r=>(
                    <TypePokemon key={r.pokemon.name} url={r.pokemon.url}/>
                ))}
            </div>
        </div>
    );
};

export default TypeList;
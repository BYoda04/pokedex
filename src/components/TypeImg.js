import  { React } from 'react';

const TypeImg = ({pokemon}) => {


    return (
        <div className='pokemon-img'>
            <div className='bg-img-item cursor'>
                <div>
                    <h3>{pokemon?.name}</h3>
                </div>
                <img src={pokemon?.sprites?.front_default} alt="img-pokemon"/>
            </div>
        </div>
    );
};

export default TypeImg;
import React from 'react';
import boy from '../img/rojo-redimension.png'
import girl from '../img/girl-redimension.png'
import { useDispatch } from 'react-redux';
import { election } from '../store/slices/counter.slice';

const BoyOrGirl = () => {

    const dispatch = useDispatch()
    const select = () => dispatch(election())

    return (
        <div className="container-gener">
            <img src={boy} alt="boy" onClick={select}/>
            <img src={girl} alt="girl" onClick={select}/>
        </div>
    );
};

export default BoyOrGirl;
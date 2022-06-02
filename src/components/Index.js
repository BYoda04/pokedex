import React from 'react';
import CardsText from './CardsText';
import Oak from './Oak';
import BoyOrGirl from './BoyOrGirl';
import InputName from './InputName';
import { useSelector } from 'react-redux';

const Index = () => {

    const id = useSelector(state=>state.counter)

    return (
        <div className='container-index'>
            {id < 8? <Oak /> : id === 9? <Oak /> : id >=10? <InputName /> : <BoyOrGirl />}
            {id >= 10? <></> : <CardsText />}
        </div>
    );
};

export default Index;
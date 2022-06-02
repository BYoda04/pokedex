import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { choiceGener, pressA } from '../store/slices/counter.slice';
import useArrayText from '../hooks/useArrayText';

const CardsText = () => {

    const {arrayText} = useArrayText()

    const id = useSelector(state=>state.counter)
    const dispatch = useDispatch()
    const pressa = () => dispatch(pressA())
    const choice = () => dispatch(choiceGener())

    return (
        <div className='container-cards'>
            <div className='card-text'>
                <div onClick={id === 8? choice : pressa}>
                    <p>
                        {id >= 9? arrayText[9] : arrayText[id]}
                    </p>
                    <p className='arrow'>▼</p>
                </div>
            </div>
        </div>
    );
};

export default CardsText;
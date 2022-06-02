import { React } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loggin } from '../store/slices/loged.slice';
import { resetCounter } from '../store/slices/counter.slice'
import { user } from '../store/slices/name.slice'

const InputName = () => {

    const { register, handleSubmit, reset } = useForm()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    let proob = ""

    const defaultValue = {name:""}

    const changeState = data=>{
        proob = data.name
        if (proob.trim() !== "") {
            dispatch(loggin())
            dispatch(user(proob.trim()))
            navigate('/pokedex')
            reset(defaultValue)
            dispatch(resetCounter())
        } else {
            reset(defaultValue)
            navigate('/login')
        }
    }

    return (
        <div className='container-index'>
            <form className='container' onSubmit={handleSubmit(changeState)}>
                <div>
                    <div className='container-name'>
                        <label htmlFor='name'>WRITE YOUR NAME</label>
                    </div>
                    <div className='input-container'>
                        <input type="text" id='name' {...register("name")}/>
                        <button type='submit'>Enter</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default InputName;
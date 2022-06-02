import { configureStore } from '@reduxjs/toolkit';
import counter from './slices/counter.slice';
import loged from './slices/loged.slice';
import nameUser from './slices/name.slice'
import index from './slices/index.slice'
import url from './slices/url.slice';

export default configureStore({
    reducer: {
        counter,
        loged,
        nameUser,
        index,
        url
	}
})
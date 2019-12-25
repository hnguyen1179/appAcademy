import { createStore } from 'redux';
import { rootReducer } from './../reducers/root_reducers';

const configureStore = () => {
     return createStore(rootReducer)
};

export default configureStore;
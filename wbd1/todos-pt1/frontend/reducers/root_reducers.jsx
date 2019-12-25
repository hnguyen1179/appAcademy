import { combineReducers } from 'redux';
import todosReducer from './todos_reducers';

export const rootReducer = combineReducers({
    todos: todosReducer
})
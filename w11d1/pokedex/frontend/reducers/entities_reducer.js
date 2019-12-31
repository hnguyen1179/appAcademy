import pokemonsReducer from './pokemons_reducer';
import { combineReducers } from 'redux';

const entitiesReducer = combineReducers({
  pokemons: pokemonsReducer,
})

export default entitiesReducer;
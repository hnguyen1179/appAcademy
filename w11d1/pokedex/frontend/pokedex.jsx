import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import { receiveAllPokemon, RECEIVE_ALL_POKEMON } from './actions/pokemon_actions';
import { fetchAllPokemon } from './util/api_util';
import selectAllPokemons from './reducers/selectors';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  window.fetchAllPokemon = fetchAllPokemon;
  window.RECEIVE_ALL_POKEMON = RECEIVE_ALL_POKEMON;
  window.receiveAllPokemon = receiveAllPokemon;
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root />, rootEl);
});
//reducer
// es una funcion que nos regresa el estado actual
//estado actual

import { createStore } from 'redux'; // Importa createStore desde Redux

const initialState = 0;

function counter(state = initialState, action) {
    return state;
}

// store
// es el almacenamiento de nuestro estado

const store = createStore(counter);

store.getState();

export default store;

import { setPokemons, startLoadingPokemons } from "./pokemonSlice";

export const getPokemons = ( page = 0 ) => {
    return async ( dispatch, getState ) => {
        dispatch( startLoadingPokemons() );
        // ToDo: make the http request
        // dispatch( setPokemons());
    }
}
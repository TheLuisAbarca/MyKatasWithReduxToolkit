import { setPokemons, startLoadingPokemons } from "./pokemonSlice";

export const getPokemons = ( page = 0 ) => {
    return async ( dispatch, getState ) => {
        dispatch( startLoadingPokemons() );
        // ToDo: make the http request
        const answer = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ page * 10 }`);
        const data = await answer.json();
        
        dispatch( setPokemons({ pokemons: data.results, page: page + 1}));
    }
}
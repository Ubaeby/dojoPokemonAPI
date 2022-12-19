import { useEffect, useState } from 'react';
import axios from 'axios';

const PokeApi = props => {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => { setPokemon(response.data.results) })
    }, []);

    return (
        <div>
            <ol>
                {pokemon.map( (poke, index) => {
                    return (<li key={index}> {poke.name}</li>)
                })}
            </ol>
        </div>
    )
}

export default PokeApi;
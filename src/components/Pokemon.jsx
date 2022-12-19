import { useEffect, useState } from 'react'

const PokeApi = props => {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => response.json())
            .then(response => setPokemon(response.results))
            .catch( (err) => {
                console.log(err)
            })
    }, []);

    return (
        <div>
            <ol>
                    {pokemon.map( (poke, index) => {
                        return ( <li key={index}> {poke.name}</li> )
                    })}  
            </ol>
        </div>

    )

}

export default PokeApi;
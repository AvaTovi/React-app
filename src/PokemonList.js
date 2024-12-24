import React from 'react'

//Destructuring pokemon in the brackets.
export default function PokemonList({pokemon}) {
    return (
        <div>
        {pokemon.map(p => (
//In the key will involve the name of the pokemon making it rare and it wont be repeated.
            <div key={p}>{p}</div>
        ))}
        </div>
    )
}
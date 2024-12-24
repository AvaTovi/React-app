import React from 'react'

export default function PokemonList({gotoNextPage, gotoPreviousPage}) {
    return (
        <div>
            {gotoPreviousPage && <button onClick={gotoPreviousPage}>Previous</button>}
            {gotoNextPage && <button onClick={gotoNextPage}>Next</button>}
        </div>
    )
}
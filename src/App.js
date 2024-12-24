import React, {useState, useEffect} from 'react';
import PokemonList from './PokemonList'
import axios from 'axios'

function App() {
  const [pokemon, setPokemon] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPageUrl, setNextPageurl] = useState()
  const [previousPageUrl, setPreviousPageUrl] = useState()
  //setting up a loading page
  const [loading, setLoading] = useCase(true)

  useEffect(() => {
    setLoading(true)
    axios.get(currentPageUrl, {cancelToken: new axios.CancelToken(c => cancel =c)}).then(res => {
    setLoading(false)
    setNextPageUrl: (res.data.next)
    setPreviousPageUrl(res.data.previous)
    setPokemon(res.data.result.map(p => p.name))})

    return () => cancel.cancel()
    //[] this makes the code not rerender itself and only runs once
    }, [currentPageUrl])

    function goToNextPage() {
      setCurrentPageUrl(nextPageUrl)
    }
  
    function goToPreviousPage() {
      setCurrentPageUrl(previousPageUrl)
    }

  if(loading) return "Loading..."

  return (
    //Passing the pokemon down to the PokemonList
    <>
      <PokemonList pokemon = {pokemon} />
      <Pagination
      gotoNextPage={nextPageUrl ? gotoNextPage : null}
      gotoPreviousPage={prevPageUrl ? gotoPreviousPage : null}
    />
  </>
)}

export default App;

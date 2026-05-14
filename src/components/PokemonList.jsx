import PokemonCard from './PokemonCard'
import { useState } from 'react'

const POKEMONS = [
  {
    id: 25,
    name: 'Pikachu',
    type: 'Elétrico',
    imageUrl:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
  },
  {
    id: 1,
    name: 'Bulbasaur',
    type: 'Grama / Veneno',
    imageUrl:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  },
]

function PokemonList() {

  const [pokemons] = useState(POKEMONS)
  const [filtro, setFiltro] = useState('')

  const listaFiltrada = pokemons.filter((p) =>
    p.name.toLowerCase().includes(filtro.toLowerCase()))

if(listaFiltrada.length === 0){
    return (
    <section>
      <label htmlFor="busca">Buscar por nome: </label>
      <input
        id="busca"
        type="search"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
        placeholder="Ex.: char"
      />   
      <p>Nenhum pokemon encontrado!</p>
    </section>
    )
  }
  return (
    <section>
      <label htmlFor="busca">Buscar por nome: </label>
      <input
        id="busca"
        type="search"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
        placeholder="Ex.: char"
      />
      {listaFiltrada.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          type={pokemon.type}
          imageUrl={pokemon.imageUrl} />
      ))}
      
      <p>A quantidade de pokemons sendo visualizada é: {listaFiltrada.length}</p>
    </section>
  )
}

export default PokemonList
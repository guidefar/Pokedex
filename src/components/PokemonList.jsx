import PokemonCard from './PokemonCard'
import { useState } from 'react'

const POKEMONS = [
  { id: 1, name: 'Bulbasaur', type: 'Grama / Veneno', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' },
  { id: 2, name: 'Ivysaur', type: 'Grama / Veneno', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png' },
  { id: 3, name: 'Venusaur', type: 'Grama / Veneno', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png' },
  { id: 4, name: 'Charmander', type: 'Fogo', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png' },
  { id: 5, name: 'Charmeleon', type: 'Fogo', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png' },
  { id: 6, name: 'Charizard', type: 'Fogo / Voador', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png' },
  { id: 7, name: 'Squirtle', type: 'Água', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png' },
  { id: 8, name: 'Wartortle', type: 'Água', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png' },
  { id: 9, name: 'Blastoise', type: 'Água', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png' },
  { id: 10, name: 'Caterpie', type: 'Inseto', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png' },
  { id: 11, name: 'Metapod', type: 'Inseto', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png' },
  { id: 12, name: 'Butterfree', type: 'Inseto / Voador', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png' },
  { id: 13, name: 'Weedle', type: 'Inseto / Veneno', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png' },
  { id: 14, name: 'Kakuna', type: 'Inseto / Veneno', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png' },
  { id: 15, name: 'Beedrill', type: 'Inseto / Veneno', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png' },
  { id: 16, name: 'Pidgey', type: 'Normal / Voador', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png' },
  { id: 17, name: 'Pidgeotto', type: 'Normal / Voador', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png' },
  { id: 18, name: 'Pidgeot', type: 'Normal / Voador', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png' },
  { id: 19, name: 'Rattata', type: 'Normal', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png' },
  { id: 20, name: 'Raticate', type: 'Normal', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png' },
  { id: 21, name: 'Spearow', type: 'Normal / Voador', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png' },
  { id: 22, name: 'Fearow', type: 'Normal / Voador', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png' },
  { id: 23, name: 'Ekans', type: 'Veneno', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png' },
  { id: 24, name: 'Arbok', type: 'Veneno', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png' },
  { id: 25, name: 'Pikachu', type: 'Elétrico', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png' },
  { id: 26, name: 'Raichu', type: 'Elétrico', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png' },
  { id: 27, name: 'Sandshrew', type: 'Terra', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png' },
  { id: 28, name: 'Sandslash', type: 'Terra', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png' },
  { id: 29, name: 'Nidoran F', type: 'Veneno', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png' },
  { id: 30, name: 'Nidorina', type: 'Veneno', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png' },
  { id: 31, name: 'Nidoqueen', type: 'Veneno / Terra', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png' },
  { id: 32, name: 'Nidoran M', type: 'Veneno', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png' },
  { id: 33, name: 'Nidorino', type: 'Veneno', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png' },
  { id: 34, name: 'Nidoking', type: 'Veneno / Terra', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png' },
  { id: 35, name: 'Clefairy', type: 'Fada', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png' },
  { id: 36, name: 'Clefable', type: 'Fada', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png' },
  { id: 37, name: 'Vulpix', type: 'Fogo', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png' },
  { id: 38, name: 'Ninetales', type: 'Fogo', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png' },
  { id: 39, name: 'Jigglypuff', type: 'Normal / Fada', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png' },
  { id: 40, name: 'Wigglytuff', type: 'Normal / Fada', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png' },
  { id: 41, name: 'Zubat', type: 'Veneno / Voador', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png' },
  { id: 42, name: 'Golbat', type: 'Veneno / Voador', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png' },
  { id: 43, name: 'Oddish', type: 'Grama / Veneno', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png' },
  { id: 44, name: 'Gloom', type: 'Grama / Veneno', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png' },
  { id: 45, name: 'Vileplume', type: 'Grama / Veneno', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png' },
  { id: 46, name: 'Paras', type: 'Inseto / Grama', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png' },
  { id: 47, name: 'Parasect', type: 'Inseto / Grama', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png' },
  { id: 48, name: 'Venonat', type: 'Inseto / Veneno', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png' },
  { id: 49, name: 'Venomoth', type: 'Inseto / Veneno', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png' },
  { id: 50, name: 'Diglett', type: 'Terra', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png' },
  { id: 51, name: 'Dugtrio', type: 'Terra', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png' }
];

function PokemonList() {

  const [pokemons] = useState(POKEMONS)
  const [filtro, setFiltro] = useState('')

  const listaFiltrada = pokemons.filter((p) =>
    p.name.toLowerCase().includes(filtro.toLowerCase()))

  if (listaFiltrada.length === 0) {
    return (
      <section>
        <h1>Pokédex</h1>
        <div className="search-container">
          <label htmlFor="busca">Buscar por nome: </label>
          <input
            id="busca"
            type="search"
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
            placeholder="Ex.: char"
          />
        </div>
        <p>Nenhum pokemon encontrado!</p>
      </section>
    )
  }
  return (
    <section>
      <h1>Pokédex</h1>
      <div className="search-container">
        <label htmlFor="busca">Buscar por nome: </label>
        <input
          id="busca"
          type="search"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          placeholder="Ex.: char"
        />
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {listaFiltrada.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            type={pokemon.type}
            imageUrl={pokemon.imageUrl} />
        ))}
      </div>

      <p>A quantidade de pokemons sendo visualizada é: {listaFiltrada.length}</p>
    </section>
  )
}

export default PokemonList
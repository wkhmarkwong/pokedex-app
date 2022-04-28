import PokemonThumb from "./PokemonThumb";

export default function PokemonList({ pokemon }) {
  return (
    <div>
      <div className="pokemon-container">
        <h1>Pokedex App</h1>
        <div className="all-container">
          {pokemon.map((p) => (
            <PokemonThumb key={p} p={p} />
          ))}
        </div>
      </div>
    </div>
  );
}

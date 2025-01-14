import useSWR, { fetcher } from "./swr.js";

const POKE_API = "https://pokeapi.co/api/v2/pokemon?limit=151";

function App() {
  const { data, error, isLoading } = useSWR(POKE_API, fetcher);

  let output;

  if (error) {
    output = <p>Failed to load Pokémon. Try again later.</p>;
  } else if (isLoading) {
    output = <p>Loading...</p>;
  } else {
    output = (
      <ol className="text-capitalize">
        {data.results.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ol>
    );
  }

  return (
    <>
      <h1>Pokéverse</h1>
      {output}
    </>
  );
}

export default App;

import useSWR, { fetcher } from "../../swr";
import Layout from "../Layout/Layout";
import PokemonCard from "../PokemonCard/PokemonCard";

const POKE_API = "https://pokeapi.co/api/v2/pokemon?limit=151";

function App() {
  const { data, error, isLoading } = useSWR(POKE_API, fetcher);

  if (error) {
    return <Layout>Error</Layout>;
  }

  if (isLoading) {
    return <Layout>Loading...</Layout>;
  }

  return (
    <Layout>
      <ul>
        {data.results.map((pokemon) => (
          <PokemonCard {...pokemon} key={pokemon.name} />
        ))}
      </ul>
    </Layout>
  );
}

export default App;

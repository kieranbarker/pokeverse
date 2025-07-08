import useSWR, { fetcher } from "../../swr";
import "./PokemonCard.css";

function PokemonCard({ name, url }) {
  const { data, error, isLoading } = useSWR(url, fetcher);

  if (error) {
    return <li className="pokemonCard">Error</li>;
  }

  if (isLoading) {
    return <li className="pokemonCard">Loading...</li>;
  }

  return (
    <li className="pokemonCard">
      <img
        className="pokemonCard-image"
        src={data.sprites.front_default}
        alt=""
      />
      <span className="pokemonCard-name">{name}</span>
    </li>
  );
}

export default PokemonCard;

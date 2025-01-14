import Col from "react-bootstrap/Col";
import PokemonCard from "./PokemonCard.jsx";

function PokemonGrid(props) {
  return (
    <>
      {props.pokedex.map((pokemon) => (
        <Col key={pokemon.name}>
          <PokemonCard url={pokemon.url} />
        </Col>
      ))}
    </>
  );
}

export default PokemonGrid;

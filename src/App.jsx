import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import CustomAlert from "./CustomAlert.jsx";
import Header from "./Header.jsx";
import Pokedex from "./Pokedex.jsx";

import useSWR, { fetcher } from "./swr.js";

const POKE_API = "https://pokeapi.co/api/v2/pokemon?limit=151";

function App() {
  const { data, error, isLoading } = useSWR(POKE_API, fetcher);

  let output;

  if (error) {
    output = (
      <Col md={6} className="mx-auto">
        <CustomAlert variant="danger">
          Failed to load Pokémon. Try again later.
        </CustomAlert>
      </Col>
    );
  } else if (isLoading) {
    output = (
      <Col md={6} className="mx-auto">
        <CustomAlert variant="info">Loading...</CustomAlert>
      </Col>
    );
  } else {
    output = <Pokedex pokedex={data.results} />;
  }

  return (
    <>
      <Header />
      <Container className="my-4">{output}</Container>
    </>
  );
}

export default App;

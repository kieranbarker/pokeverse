import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import useSWR, { fetcher } from "../swr";
import Layout from "./Layout";
import PokemonCard from "./PokemonCard";
import SearchForm from "./SearchForm";

const POKE_API = "https://pokeapi.co/api/v2/pokemon?limit=151";

function App() {
  const { data, error, isLoading } = useSWR(POKE_API, fetcher);
  const [search, setSearch] = useState("");

  if (error) {
    return (
      <Layout>
        <Alert variant="danger">Error</Alert>
      </Layout>
    );
  }

  if (isLoading) {
    return (
      <Layout>
        <Alert variant="primary">Loading...</Alert>
      </Layout>
    );
  }

  return (
    <Layout>
      <Row className="justify-content-center">
        <Col sm={6} lg={4} xl={3}>
          <SearchForm
            search={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </Col>
      </Row>
      <Row as="ul" className="list-unstyled">
        {data.results
          .filter((pokemon) => pokemon.name.includes(search.toLowerCase()))
          .map((pokemon) => (
            <Col
              as="li"
              sm={6}
              md={4}
              lg={3}
              xl={2}
              className="p-2"
              key={pokemon.name}
            >
              <PokemonCard {...pokemon} />
            </Col>
          ))}
      </Row>
    </Layout>
  );
}

export default App;

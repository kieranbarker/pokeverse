import Card from "react-bootstrap/Card";
import useSWR, { fetcher } from "./swr.js";

function PokemonCard(props) {
  const { data, error, isLoading } = useSWR(props.url, fetcher);

  if (error) {
    return (
      <Card>
        <Card.Body>
          <Card.Title>Error</Card.Title>
        </Card.Body>
      </Card>
    );
  }

  if (isLoading) {
    return (
      <Card>
        <Card.Body>
          <Card.Title>Loading...</Card.Title>
        </Card.Body>
      </Card>
    );
  }

  return (
    <Card>
      <Card.Img
        variant="top"
        src={data.sprites.front_default}
        width={96}
        height={96}
        className="w-auto align-self-center"
      />
      <Card.Body>
        <Card.Title className="text-capitalize text-center">
          {data.name}
        </Card.Title>
      </Card.Body>
    </Card>
  );
}

export default PokemonCard;

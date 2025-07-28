import Card from "react-bootstrap/Card";
import useSWR, { fetcher } from "../swr";

function PokemonCard({ name, url }) {
  const { data, error, isLoading } = useSWR(url, fetcher);

  if (error) {
    return (
      <Card>
        <Card.Body>
          <Card.Title className="text-capitalize">Error</Card.Title>
        </Card.Body>
      </Card>
    );
  }

  if (isLoading) {
    return (
      <Card>
        <Card.Body>
          <Card.Title className="text-capitalize">Loading...</Card.Title>
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
        className="align-self-center w-auto"
        alt=""
      />
      <Card.Body className="text-center">
        <Card.Title className="text-capitalize">{name}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default PokemonCard;

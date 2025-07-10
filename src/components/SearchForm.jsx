import Form from "react-bootstrap/Form";

function SearchForm({ search, onChange }) {
  return (
    <search>
      <Form>
        <Form.Group className="mb-3" controlId="search">
          <Form.Label className="w-100">Search</Form.Label>
          <Form.Control type="search" value={search} onChange={onChange} />
        </Form.Group>
      </Form>
    </search>
  );
}

export default SearchForm;

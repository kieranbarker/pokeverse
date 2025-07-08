import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Layout({ children }) {
  return (
    <>
      <header>
        <Navbar className="bg-secondary">
          <Container>
            <Navbar.Brand className="text-white">
              <img
                className="d-inline-block align-top"
                src="/pokeball.svg"
                alt=""
                width={30}
                height={30}
              />{" "}
              Pokéverse
            </Navbar.Brand>
          </Container>
        </Navbar>
      </header>
      <main>
        <Container className="py-2">{children}</Container>
      </main>
    </>
  );
}

export default Layout;

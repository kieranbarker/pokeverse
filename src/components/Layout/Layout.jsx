import "./Layout.css";

function Layout({ children }) {
  return (
    <>
      <header>
        <h1 className="logo">
          <img
            className="logo-image"
            src="/pokeball.svg"
            alt=""
            width={30}
            height={30}
          />
          <span className="logo-text">Pokéverse</span>
        </h1>
      </header>
      <main>{children}</main>
    </>
  );
}

export default Layout;

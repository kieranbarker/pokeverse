import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../src/components/App.jsx";

describe("App", () => {
  it("renders the navigation", () => {
    render(<App />);
    const nav = screen.getByRole("navigation");
    expect(nav).toBeInTheDocument();
    expect(nav).toHaveTextContent("Pokéverse");
  });

  it("filters the list of pokemon based on search input", async () => {
    render(<App />);

    // There should be 151 Pokemon when the page loads.
    let pokemonCards = await screen.findAllByRole("listitem");
    expect(pokemonCards).toHaveLength(151);

    const searchInput = screen.getByRole("searchbox");
    fireEvent.change(searchInput, { target: { value: "saur" } });

    // There should be three Pokemon containing "saur": Bulbasaur, Ivysaur, and Venusaur.
    pokemonCards = screen.getAllByRole("listitem");
    expect(pokemonCards).toHaveLength(3);
  });
});

import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Collapse from "./Collapse";
import "@testing-library/jest-dom/extend-expect";

describe("Collapse component", () => {
  it("renders with collapsed state", () => {
    render(
      <Collapse title="Test Collapse">
        <p>Collapsible content</p>
      </Collapse>
    );

    // Vérifie si le titre est présent
    expect(screen.getByText("Test Collapse")).toBeInTheDocument();

    // Vérifie si le contenu est caché
    expect(screen.queryByText("Collapsible content")).toBeNull();
  });

  it("expands and collapses on click", () => {
    render(
      <Collapse title="Test Collapse">
        <p>Collapsible content</p>
      </Collapse>
    );

    const header = screen.getByText("Test Collapse");

    // Vérifie si le contenu est caché initialement
    expect(screen.queryByText("Collapsible content")).toBeNull();

    // Clique sur l'en-tête pour déplier le contenu
    fireEvent.click(header);

    // Vérifie si le contenu est maintenant affiché
    expect(screen.getByText("Collapsible content")).toBeInTheDocument();

    // Clique à nouveau sur l'en-tête pour replier le contenu
    fireEvent.click(header);

    // Vérifie si le contenu est à nouveau caché
    expect(screen.queryByText("Collapsible content")).toBeNull();
  });
});
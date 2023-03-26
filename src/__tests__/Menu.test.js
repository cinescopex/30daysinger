import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Menu from "../components/shared/Menu";
import { MemoryRouter, Route } from "react-router-dom";

describe("Menu component", () => {
  // tests will go here
  it("renders without errors", () => {
    render(
      <MemoryRouter>
        <Menu />
      </MemoryRouter>
    );
  });
});

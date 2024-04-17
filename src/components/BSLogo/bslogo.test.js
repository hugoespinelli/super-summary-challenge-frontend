import React from "react";
import { render, screen } from "@testing-library/react";
import BSLogo from "./bslogo";

test("Renders BSLogo component with logo image", () => {
  render(<BSLogo />);

  expect(screen.getByAltText("bs-logo")).toBeInTheDocument();
});

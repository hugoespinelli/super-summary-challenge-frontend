import React from "react";
import { render, screen } from "@testing-library/react";
import Sidebar from "./sidebar";

test("Renders Sidebar with Genres heading and empty list", () => {
  render(<Sidebar genres={[]} />);

  expect(screen.getByText("Genres")).toBeInTheDocument();
  const list = screen.getByRole("list");
  expect(list).toBeInTheDocument();
});

test("Renders Sidebar with genres list", () => {
  const mockGenres = [
    { display_name: "Science Fiction" },
    { display_name: "Fantasy" },
  ];

  render(<Sidebar genres={mockGenres} />);

  mockGenres.forEach((genre) => {
    expect(screen.getByText(genre.display_name)).toBeInTheDocument();
  });
});

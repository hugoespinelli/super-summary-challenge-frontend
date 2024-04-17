import React from "react";
import { render, waitFor } from "@testing-library/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Home from "./home";
import BestSellersAPI from "../../services/bestSellersAPI";

jest.mock("../../services/bestSellersAPI");

const mockTheme = createTheme({
  palette: {
    ochre: {
      main: "#fff",
      dark: "#fff",
      light: "#fff",
      darkContrast: "#fff",
    },
  },
});

const mockTopSellers = [
  {
    list_name: "Combined Print & E-Book Fiction",
    books: [
      {
        title: "The Institute",
        author: "Stephen King",
        book_image: "https://...",
        amazon_product_url: "https://...",
      },
      {
        title: "Circe",
        author: "Madeline Miller",
        book_image: "https://...",
        amazon_product_url: "https://...",
      },
    ],
  },
];

const mockGenres = [
  { display_name: "Science Fiction" }, 
  { display_name: "Fantasy" },
  { display_name: "Horror" },
];

describe("Home component", () => {
  beforeEach(() => {
    BestSellersAPI.fetchTopBestSellers.mockResolvedValueOnce({
      results: { lists: mockTopSellers },
    });
    BestSellersAPI.fetchGenres.mockResolvedValueOnce({ results: mockGenres });
  });

  it("Renders Home component with mocked data", async () => {
    const { getByText, getByAltText, findAllByTestId } = render(
      <ThemeProvider theme={mockTheme}>
        <Home />
      </ThemeProvider>
    );

    // Check for the logo in the header
    expect(getByAltText("bs-logo")).toBeInTheDocument();

    // Check for the headline and subtitle in the Hero component
    expect(
      getByText(/Choose Your Next Favorite Bestseller Books!/i)
    ).toBeInTheDocument();
    expect(
      getByText(/Check out the latest New York Times best-selling books/i)
    ).toBeInTheDocument();

    await waitFor(async () => {

      const itemsListGenre = await findAllByTestId("list-item-genre");
      expect(itemsListGenre).toHaveLength(3);
      expect(getByText(/Science Fiction/i)).toBeInTheDocument();
      expect(getByText(/Fantasy/i)).toBeInTheDocument();
      expect(getByText(/Horror/i)).toBeInTheDocument();

      const bookCards = await findAllByTestId("book-card");
      expect(bookCards).toHaveLength(2);

    }, {timeout: 1500})

  }, 10000);
});

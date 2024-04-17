import React from "react";
import { render, screen, cleanup } from "@testing-library/react";

import BookCard from "./bookCard";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const bookImage = "path/to/book-image.jpg";
const title = "The Great Gatsby";
const author = "F. Scott Fitzgerald";
const url = "https://...";
const labelNumber = 3;

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

afterEach(cleanup);

test("Renders BookCard component with props", () => {
  render(
    <ThemeProvider theme={mockTheme}>
      <BookCard
        bookImage={bookImage}
        title={title}
        author={author}
        url={url}
        labelNumber={labelNumber}
      />
    </ThemeProvider>
  );

  expect(screen.getByText(title)).toBeInTheDocument();
  expect(screen.getByText(`by ${author}`)).toBeInTheDocument();
  expect(screen.getByText("Buy")).toBeInTheDocument();
  expect(screen.getByText(4)).toBeInTheDocument();
});

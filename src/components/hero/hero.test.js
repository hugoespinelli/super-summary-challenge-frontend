import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Hero from "./hero";

const heroImage = "path/to/hero-image.jpg";
const headline = "This is the Headline";
const subtitle = "This is the Subtitle";

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

test("Renders Hero component with props", () => {
  render(
    <ThemeProvider theme={mockTheme}>
      <Hero heroImage={heroImage} headline={headline} subtitle={subtitle} />
    </ThemeProvider>
  );

  expect(screen.getByText(headline)).toBeInTheDocument();
  expect(screen.getByText(subtitle)).toBeInTheDocument();
});

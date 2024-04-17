import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import LinkButton from "./linkButton";

const mockUrl = "https://www.example.com";
const buttonText = "Click Me";

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

test("Renders LinkButton with props", () => {
  
  render(
    <ThemeProvider theme={mockTheme}>
      <LinkButton url={mockUrl} buttonText={buttonText} />
    </ThemeProvider>
  );
  
  expect(screen.getByText(buttonText)).toBeInTheDocument();
  const link = screen.getByRole("link", { name: buttonText });
  expect(link).toHaveAttribute("href", mockUrl);
  expect(link).toHaveAttribute("target", "_blank");
  expect(link).toHaveAttribute("rel", "noopener noreferrer");
});

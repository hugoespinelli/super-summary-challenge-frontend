import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    ochre: {
      main: "#AC87C5",
      light: "#FFE5E5",
      dark: "#756AB6",
      contrastText: "#E0AED0",
    },
  },
  typography: {
    h1: {
      fontFamily: "Playfair Display, serif",
    },
    h2: {
      fontFamily: "Playfair Display, serif",
    },
    h3: {
      fontFamily: "Playfair Display, serif",
    },
    h4: {
      fontFamily: "Playfair Display, serif",
    },
    h5: {
      fontFamily: "Playfair Display, serif",
    },
    h6: {
      fontFamily: "Playfair Display, serif",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;

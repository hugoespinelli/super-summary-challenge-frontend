import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';


import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    ochre: {
      main: '#AC87C5',
      light: '#FFE5E5',
      dark: '#756AB6',
      contrastText: '#E0AED0',
    },
  },
});

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

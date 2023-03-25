import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import Card from './components/Card/Card';
import Chips from './components/Chips/Chips';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <header>
          <h1 className="c-app-header">Turistické trasy</h1>
          <nav>
            <Chips />
          </nav> 
        </header>

        <main>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </main>
      </div>
    </ThemeProvider>
    
  );
}

export default App;

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import Card from './components/Card/Card';
import Chips from './components/Chips/Chips';
import SubChips from "./components/Chips/SubChips";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "./reducers/dataSlice";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchData())
  }, [])

  const dataStatus = useSelector(state => state.data.trips.status)
  const data = useSelector(state => state.data.trips.data)
  const dataError = useSelector(state => state.data.trips.error)
  const filter = useSelector(state => state.data.trips.filter)
  const location = useSelector(state => state.data.trips.location)

  const getLabels = () => {
    if (dataStatus === 'succeeded') {
      return data.map(d => d.name)
    }
    return []
  }

  const getTrips = () => {
    if (filter === null && location === null) {
      return data.map(d => d.trips).flat();

    }
    if (filter && location) {
      return data.filter(d => d.name === filter)
                  .map(d => d.trips).flat()
                  .filter(t => t.location === location);
    }
    return data.filter(d => d.name === filter).map(d => d.trips).flat();
  }

  const getLocations = () => {
    if (filter === null) return [];

    if (dataStatus === 'succeeded') {
      const loc = [];
      const geo = data.filter(d => d.name === filter).map(d => d.trips);

      for (let i = 0; i < geo.length; i++) {
        for (let j = 0; j < geo[i].length; j++) {
          loc.push(geo[i][j].location)
        }
      }
      return [...new Set(loc)];
    }
    return []
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <header>
          <h1 className="c-app-header">Turistické trasy</h1>
          <nav>
            <Chips labels={getLabels()} />
            <SubChips labels={getLocations()} />
          </nav>
        </header>

        <main>
          {dataStatus === 'succeeded' && getTrips().map(t => <Card
              trip={t}/>
            )}

        </main>
      </div>
    </ThemeProvider>

  );
}

export default App;

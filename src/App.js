import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import Card from './components/Card/Card';
import Chips from './components/Chips/Chips';
import SubChips from "./components/Chips/SubChips";
import Button from '@mui/material/Button';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "./reducers/dataSlice";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import IconButton from "@mui/material/IconButton";

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

  const getAllTrips = () => {
    let index;
    if (!filter) return [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].name === filter) {
        index = i;
        break
      }
    }
    let loc = getLocations();
    if (!loc) return [];
    if (location && data[index].maps) {
      return [data[index].maps[location]]
    } else if (data[index].maps) {
      return Object.values(data[index].maps)
    }
    return [];
  }

  const getAllPlaces = () => {
    let index;
    if (!filter) return null;
    for (let i = 0; i < data.length; i++) {
      if (data[i].name === filter) {
        index = i;
        break
      }
    }
    if (data[index].places) {
      return data[index].places
    }
    return null;
  }

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

  const openCalendar = () => {}

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <header>
          <h1 className="c-app-header">Turistické trasy</h1>
          <span className="ic-calendar">
            <IconButton aria-label="calendar view">
              <CalendarMonthOutlinedIcon />
            </IconButton>
          </span>
          <nav>
            <Chips labels={getLabels()} />
            <SubChips labels={getLocations()} />
          </nav>
          <section class="show-all">
            <div className="all-trips">
              <Button size="small" color="secondary" variant="text" href={getAllTrips()} target="_blank">
                Všechny trasy
              </Button>
            </div>
            <div className="all-places">
              <Button size="small" color="secondary" variant="text" href={getAllPlaces()} target="_blank">
                Všechna místa
              </Button>
            </div>
          </section>
        </header>

        <main>
          {dataStatus === 'succeeded' && getTrips().map(t => <Card trip={t}/>)}
        </main>
      </div>
    </ThemeProvider>

  );
}

export default App;

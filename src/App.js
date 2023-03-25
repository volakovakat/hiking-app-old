import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import Card from './components/Card/Card';
import Chips from './components/Chips/Chips';
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


  const getLabels = () => {
    if (dataStatus === 'succeeded') {
      return data.map(d => d.name)
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
          </nav>
        </header>

        <main>
          {dataStatus === 'succeeded' && data.map(d => d.trips.map(t => <Card
              key={d.name + t.id}
              trip={t}/>
            ))}

        </main>
      </div>
    </ThemeProvider>

  );
}

export default App;

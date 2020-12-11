import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from './Components/HomePage/HomePage';
import AddCars from './Components/AddCars/AddCars';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCars } from './Components/ReduxState/Actions/CarActions'
import Car from './Components/HomePage/AllCars/Car/Car';
import { Container } from '@material-ui/core';
import Header from './Components/Shared/Header';


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch])
  return (

    <Router>
      <Header />
      <Container maxWidth='lg' className="App">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/add-car">
            <AddCars />
          </Route>
          <Route path="/vehicle/:id">
            <Car />
          </Route>
        </Switch>
      </Container>
    </Router>

  );
};

export default App;

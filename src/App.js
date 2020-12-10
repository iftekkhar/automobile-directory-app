import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from './Components/HomePage/HomePage';
import AddCars from './Components/AddCars/AddCars';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCars } from './Components/redux/actions/carActions'


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch])
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/add-car">
            <AddCars />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;

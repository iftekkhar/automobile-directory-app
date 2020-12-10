import './App.css';
import CarSingleCard from './Components/CarSingleCard';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CarDetails from './Components/CarDetails';

function App() {
  return (
    <div className="App">
      <CarSingleCard />
      <CarDetails />
      {/* <Router>
        <Switch>
          <Route path="/car/:id">
            <CarDetails />
          </Route>
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;

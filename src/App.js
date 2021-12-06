import Map2 from './components/Map2';
import Form from './components/Form';
import { DataProvider } from './DataContext';
import { BrowserRouter as Switch, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
      <DataProvider>
        <Switch>
          <Route exact path="/">
            <Form /> 
          </Route>
          <Route path="/map">
            <Map2 />
          </Route>
        </Switch>
      </DataProvider>
  );
}

export default App;

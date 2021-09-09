import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import SearchForm from './components/SearchForm';
import Display from './components/Display';


function App() {
  return (
    <BrowserRouter>
    <div className="App container">
      
      <h1>ApiWalker, The Force is With You</h1>

    <SearchForm></SearchForm>

      {/* Render different Routes with the Switch and Route Combo */}

      <Switch>
          <Route exact path = "/:category/:id">
                
                <Display></Display>

          </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;

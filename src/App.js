import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import SearchForm from './components/SearchForm';
import Display from './components/Display';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
          
          <div className ="App-header">
            <h1>ApiWalker, The Force is With You</h1>
            <hr />
          <SearchForm></SearchForm>

        </div>

      {/* Render different Routes with the Switch and Route Combo */}
    <div className="card App-body">

    
      <Switch>
          <Route exact path = "/:category/:id">
                
                <Display></Display>

          </Route>
      </Switch>
    
    </div>
    
  </div>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import SearchForm from './components/SearchForm';
import Display from './components/Display';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
          
          <div className ="App-header">
            <h1>The Force is With You <br/>ApiWalker</h1>
            <hr />
          <SearchForm></SearchForm>

        </div>

    <div className="card App-body">
    
      {/* Render different Routes with the Switch and Route Combo */}
      <Switch>

      {/* enter different routes within the Switch tag */}
          <Route exact path = "/:category/:id">
                
                <Display></Display>

          </Route>

{/* 
          <Route exact path = "/">

          </Route> */}


      </Switch>
    
    </div>
    
  </div>
    </BrowserRouter>
  );
}

export default App;

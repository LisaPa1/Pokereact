import React, { Component } from "react";
import PokemonList from "./components/PokemonList";
import PokemonDetails from "./containers/PokemonDetails";
import { HashRouter, Route, Switch, NavLink } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <div>
            <Switch>
              <Route exact path="/" component={PokemonList} />
              <Route path="/pokemon/:id" component={PokemonDetails} />
            </Switch>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;

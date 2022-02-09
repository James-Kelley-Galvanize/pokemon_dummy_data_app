import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import pokeData from "./pokeData";
import PokemonList from "./Components/PokemonList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokeData,
      selectedPokemon: false,
    };
    this.selectPokemon = this.selectPokemon.bind(this);
  }

  selectPokemon(index) {
    // console.log(`pokemon index:`, index);
    let isAlreadyActive = index === this.state.selectedPokemon;
    this.setState({ selectedPokemon: isAlreadyActive ? false : index });
  }

  // REMINDER - TALK ABOUT FETCH AND COMPONENTDIDMOUNT AT THE END
  render() {
    let { pokeData, selectedPokemon } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <PokemonList
            pokeData={pokeData}
            selectPokemon={this.selectPokemon}
            selectedPokemon={selectedPokemon}
          />
        </header>
      </div>
    );
  }
}

export default App;

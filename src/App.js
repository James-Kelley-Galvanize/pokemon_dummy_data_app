import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import pokeData from "./pokeData";
import PokemonList from "./Components/PokemonList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokeData: [], // allows the app to start without pokeData in the state because you can map over an empty array
      selectedPokemon: false,
    };
    this.selectPokemon = this.selectPokemon.bind(this);
  }

  componentDidMount() {
    // this is where you make a fetch call and make your pokeData array
    this.setState({ pokeData }); // this simulates setting the state with data returned from a fetch call
  }

  selectPokemon(index) {
    let isAlreadyActive = index === this.state.selectedPokemon;
    this.setState({ selectedPokemon: isAlreadyActive ? false : index });
  }

  // REMINDER - TALK ABOUT FETCH AND COMPONENTDIDMOUNT AT THE END
  render() {
    let { pokeData, selectedPokemon } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          {
            <PokemonList
              pokeData={pokeData} // This must be an array for the app to spin up without crashing
              selectPokemon={this.selectPokemon}
              selectedPokemon={selectedPokemon}
            />
          }
        </header>
      </div>
    );
  }
}

export default App;

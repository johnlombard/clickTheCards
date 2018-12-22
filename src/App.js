import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Card from './components/Game/Card';
import Game from './components/Game';
import Covers from "./Covers.json";

class App extends Component {
  state = {
    Covers,
    CurrentScore: 0,
    HighScore: 0,
    Clicked: [],
    Guess: ""
  };
  
  handleIncrement = (id) => {
    // We always use the setState method to update a component's state

    // If the card has not been clicked at one to the score and set the state of the image to
    if (this.state.Clicked.indexOf(id) === -1 ) {
      console.log(this.state.Guess);
      this.setState({ CurrentScore: this.state.CurrentScore + 1,  Clicked: this.state.Clicked.concat(id), Guess: "Great Book!"   });
    } else {
      // IF the card has been clicked reset the score
      console.log(this.state.Guess);
      this.setState({ CurrentScore: 0,
        Guess: "Already Read!", 
        Clicked: [],
      });
    }
  };

  shuffle = (arr) => {
    return arr.sort(() => Math.random() - 0.5);
  };

  render() {

    return (

      <div className="App">
        <Navbar
          // Sets the current score to the states score
          Guess ={this.state.Guess}
          CurrentScore={this.state.CurrentScore} />
        <Jumbotron />

        <Game>
          <div className="row">

            {/* Maps Through all of the cards to add click event and the background image */}

            {this.shuffle (this.state.Covers).map(Cover => (
                <Card
                  image={Cover.image}
                  id={Cover.id}
                  handleIncrement={this.handleIncrement}
                />
              ))
            }
          </div>
  
        </Game>

      </div>
        );
      }
    }
    
    export default App;

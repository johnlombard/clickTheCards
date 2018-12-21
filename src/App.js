import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Card from './components/Game/Card';
import Game from './components/Game';
import Covers from "./Covers.json";
import { concat } from 'rxjs';


class App extends Component {
  state = {
    Covers,
    CurrentScore: 0,
    HighScore: 0,
    Clicked: [],

  };
  
  handleIncrement = (props) => {
    // We always use the setState method to update a component's state

    // If the card has not been clicked at one to the score and set the state of the image to
    if (this.state.Clicked.includes(Covers.id) ) {
      this.setState({ CurrentScore: this.state.CurrentScore + 1, Clicked: Clicked.concat(props)  });
    } else {
      // IF the card has been clicked reset the score
      this.setState({ CurrentScore: this.state.CurrentScore + 111});
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
          CurrentScore={this.state.CurrentScore} />
        <Jumbotron />

        <Game>
          <div className="row col-12">

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

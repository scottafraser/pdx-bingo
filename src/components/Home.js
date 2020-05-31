import React, { Component } from "react";
import Board from "./Board";
import List from "../list.json";

export default class Home extends Component {
  state = { shuffledList: [] };

  shuffle = (array) => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  componentDidMount = () => {};

  render() {
    return (
      <div className="container">
        <div id="title">
          <h1>Portland Bingo</h1>
          <h3>Too Cool For School</h3>
          <div>
            <button
              onClick={() =>
                this.setState({
                  shuffledList: this.shuffle(List),
                })
              }
            >
              Shuffle
            </button>
          </div>
        </div>
        <Board list={this.shuffle(List)} />
      </div>
    );
  }
}

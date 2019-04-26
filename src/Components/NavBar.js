import React from "react";
import "./NavBar.css";

class NavBar extends React.Component {
  render() {
    return (
      <header className="header">
        <h1>Monster Hunter Click Game</h1>
        <h2>
          Click on an image to earn points, but don't click on any more than
          once or you lose!
        </h2>
        <ul className="list">
          <li>Score: {this.props.score}</li>
          <li>High Score: {this.props.highScore}</li>
        </ul>
      </header>
    );
  }
}

export default NavBar;

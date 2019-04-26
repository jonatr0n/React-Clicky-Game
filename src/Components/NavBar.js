import React from 'react';
import './NavBar.css'



class NavBar extends React.Component {
    render() {
        return (

                <header className="header">
                <h1>Dark Souls Clicky game</h1>
                <p>Click on an image to earn points, but don't click on any more than once!</p>
                <ul className="list">
                    <li>Score: {this.props.score}</li>
                    <li>High Score: {this.props.highScore}</li>
                    </ul>

                </header>

        )
    }
}


export default NavBar;
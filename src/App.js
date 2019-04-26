import React from 'react';
import './App.css';
import images from './images.json'
import ImageCard from './Components/ImageCard'
import NavBar from './Components/NavBar.js'

class App extends React.Component{

  state ={
    click: [],
    score: 0,
    highScore: 0,
  }

  updateClick = name => {
    if(this.state.click.indexOf(name)>-1){
      this.setState({ click: [] })
    
      if(this.state.score > this.state.highScore){
        this.setState({ highScore: this.state.score })
      }

      this.setState({ score: 0 })
      
      return;

    } else {
      let score = this.state.score;
      score++;

      if(score > this.state.highScore){
        this.setState({ highScore: score })
      }
      this.setState({ score: score })
    }

    let click = this.state.click
    click.push(name)    
    this.setState({ click })
  }


   ImageGenerator = () =>{
     const newImageArr = [];
     while(newImageArr.length !== images.length){
      let image = images[Math.floor(Math.random()*images.length)];
      if(newImageArr.indexOf(image)<0){
        newImageArr.push(image)
      }
    }
  return newImageArr 
   }


  render() {
    return (
      <div>
        <div>
        <NavBar score={this.state.score} highScore={this.state.highScore} />
        </div>
        <div class="ui container main">
        {this.ImageGenerator().map(e => 
        (
          <ImageCard updateClick={this.updateClick}
          name={e.name}
          image={e.image}
          />
          ))
        }
        </div>
      </div>
    );
  }
}

export default App;

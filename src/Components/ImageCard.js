import React from "react";
import "./ImageCard.css";

class ImageCard extends React.Component {
  render() {
    return (
      <div class=" card-main">
        <div class="image">
          <img
            clasName="img"
            onClick={() => this.props.updateClick(this.props.name)}
            alt={this.props.name}
            src={this.props.image}
            height="125"
            width="125"
          />
        </div>
      </div>
    );
  }
}

export default ImageCard;

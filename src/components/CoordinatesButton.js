import React, { Component } from "react";

class CoordinatesButton extends Component {
  render() {
    return <button onClick={this.onClickHandler}>My Button!</button>;
  }

  onClickHandler = (event) => {
    let cords = [event.clientX, event.clientY];
    this.props.onReceiveCoordinates(cords);
  };
}

export default CoordinatesButton;

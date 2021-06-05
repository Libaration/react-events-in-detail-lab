import React, { Component } from "react";

class DelayedButton extends Component {
  render() {
    return <button onClick={this.onClickHandler}>Delayed Button!</button>;
  }

  onClickHandler = (event) => {
    event.persist();
    setTimeout(() => {
      this.props.onDelayedClick(event);
    }, this.props.delay);
  };
}

export default DelayedButton;

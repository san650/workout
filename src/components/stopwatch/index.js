import React, { Component } from 'react';

const style = {
  border: '1px solid rgba(0,0,0,.1)',
  padding: '1em',
  textAlign: 'center',
  fontFamily: 'monospace',
  fontSize: '.8rem',
  position: 'fixed',
  top: '1em',
  right: '1em',
  borderRadius: '50px',
  backgroundColor: 'white',
  boxShadow: '2px 2px rgba(0,0,0,.1)'
};

export default class StopWatch extends Component {
  state = {
    seconds: 'Go'
  }

  render() {
    let label = this.state.seconds;

    if (!isNaN(label)) {
      let minutes = Math.floor(label / 60).toString();
      let seconds = (label % 60).toString();

      label = `${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`;
    }

    return (
      <div aria-label="button" style={style} onClick={this.handleRestartClick}>
        {label}
      </div>
    );
  }

  handleRestartClick = () => {
    window.clearInterval(this.intervalId);
    this.intervalId = window.setInterval(this.handleTick, 1000);

    this.setState({ seconds: 0 });
  }

  handleTick = () => {
    this.setState({
      seconds: this.state.seconds + 1,
    });
  }
}

import React, { Component } from 'react';

const style = {
  display: 'inline-block',
  padding: '.5em',
  border: '1px solid rgba(0,0,0,.1)',
  textAlign: 'center',
  margin: '0 .5em 0 0'
};

const checkedStyle = {
  textDecoration: 'line-through',
  opacity: '.5'
};

export default class Set extends Component {
  state = {
    checked: false
  }

  render() {
    const { checked } = this.state;
    let weight;

    if (checked) {
      weight = (
        <span style={checkedStyle}>
          {this.props.weight}
        </span>
      );
    } else {
      weight = (
        <span>
          {this.props.weight}
        </span>
      );
    }

    return (
      <div style={style} onClick={this.handleClick}>
        {weight}
      </div>
    );
  }

  handleClick = () => {
    this.setState({
      checked: !this.state.checked
    });
  }
}

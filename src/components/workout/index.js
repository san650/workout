import React, { Component } from 'react';
import { helpStyle } from '../../styles';

const style = {
  borderTop: '1px dotted rgba(0,0,0,.1)',
  margin: '1em 0'
};

export default class Workout extends Component {
  render() {
    const { title, days, children } = this.props;

    return (
      <div style={style}>
        <h3 onClick={this.handleClick}>
          {title}
          <br />
          <span style={helpStyle}>
            {days}
          </span>
        </h3>
        {children}
      </div>
    );
  }

  handleClick = () => {
    this.props.onClick(this.props.id);
  }
}

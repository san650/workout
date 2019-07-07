import React, { PureComponent } from 'react';

const uncheckedStyle = {
  display: 'inline-block',
  padding: '.5em',
  border: '1px solid rgba(0,0,0,.1)',
  textAlign: 'center',
  margin: '0 .5em 0 0',
  borderRadius: '2rem',
  fontFamily: 'monospace',
  width: '25px',
  backgroundColor: 'rgba(100,100,200,.01)'
};

const checkedStyle = {
  ...uncheckedStyle,
  textDecoration: 'line-through',
  opacity: '.2',
  backgroundColor: 'rgba(0,0,0,.1)'
}

export default class Set extends PureComponent {
  render() {
    const label = this.props.weight.toString().padStart(2, ' ');
    const style = this.props.isChecked ? checkedStyle : uncheckedStyle;

    return (
      <div style={style} onClick={this.handleClick}>
        {label}
      </div>
    );
  }

  handleClick = () => {
    this.props.onClick(this.props.id);
  }
}

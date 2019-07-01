import React, { Component } from 'react';
import './App.css';
import data from './data';
import StopWatch from './components/stopwatch';
import Set from './components/set';

function App() {
  return (
    <div>
      <h1>Workout</h1>
      <StopWatch />
      <Training {...data} />
    </div>
  );
}

class Training extends Component {
  state = {
    weeks: this.props.weeks.map((week) => ({
      ...week,
      isVisible: false
    }))
  }

  render() {
    return (
      <div>
        <h2>
          {this.props.title}
        </h2>
        {this.state.weeks.map((week) =>
          <Week key={week.title} {...week} onVisibilityChange={this.handleVisibilityChange} />
        )}
      </div>
    );
  }

  handleVisibilityChange = (target) => {
    this.setState({
      ...this.state,
      weeks: this.state.weeks.map((week) =>
        week.title !== target ?
          week : { ...week, isVisible: !week.isVisible }
      )
    });
  }
}

const weekStyle = {
  borderTop: '1px dotted rgba(0,0,0,.1)',
  margin: '1em 0'
};

const helpStyle = {
  color: 'rgba(0,0,0,.5)',
  fontSize: '.8rem',
  fontWeight: 'normal',
};

class Week extends Component {
  render() {
    const { title, days, exercises, isVisible } = this.props;

    return (
      <div style={weekStyle}>
        <h3 onClick={this.handleClick}>
          {title}
          {isVisible && <br />}
          {isVisible &&
            <span style={helpStyle}>
              {days}
            </span>
          }
        </h3>
        {isVisible && exercises.map((exercise) =>
          <Exercise key={exercise.name} {...exercise} />)
        }
      </div>
    );
  }

  handleClick = () => {
    this.props.onVisibilityChange(this.props.title);
  }
}

function LabelAndValue({ label, value }) {
  return (
    <span>
      <span style={helpStyle}>
        {label}
      </span>
      {' '}
      <span>
        {value}
      </span>
    </span>
  );
}

function Exercise({ name, sets, reps, tempo, rest, weights }) {
  return (
    <div>
      <h4>
        {name}
        <br />
        <LabelAndValue label="Sets" value={sets} />
        {' '}
        <LabelAndValue label="Reps" value={reps} />
        {' '}
        <LabelAndValue label="Tempo" value={tempo} />
        {' '}
        <LabelAndValue label="Rest" value={`${rest}s`} />
      </h4>
      {weights.map((weight, index) =>
        <Set key={index} weight={weight} />
      )}
    </div>
  );
}

export default App;

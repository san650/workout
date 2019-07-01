import React from 'react';
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

function Training({ title, weeks }) {
  return (
    <div>
      <h2>
        {title}
      </h2>
      {weeks.map((week) => <Week key={week.title} {...week} />)}
    </div>
  );
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

function Week({ title, days, exercises }) {
  return (
    <div style={weekStyle}>
      <h3>
        {title}
        <br />
        <span style={helpStyle}>
          {days}
        </span>
      </h3>
      {exercises.map((exercise) => <Exercise key={exercise.name} {...exercise} />)}
    </div>
  );
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

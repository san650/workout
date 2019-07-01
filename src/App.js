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

const helpStyle = {
  color: 'rgba(0,0,0,.5)',
  fontSize: '.8rem',
  fontWeight: 'normal'
};

function Training({ title, weeks }) {
  return (
    <div>
      <h2>
        {title}
      </h2>
      <p style={helpStyle}>
        Sets / Reps / Tempo / Rest
      </p>
      {weeks.map((week) => <Week key={week.title} {...week} />)}
    </div>
  );
}

function Week({ title, days, exercises }) {
  return (
    <div>
      <h3>
        {title}
        <span style={helpStyle}>
          {' '} - {days}
        </span>
      </h3>
      {exercises.map((exercise) => <Exercise key={exercise.name} {...exercise} />)}
    </div>
  );
}

function Exercise({ name, sets, reps, tempo, rest, weights }) {
  return (
    <div>
      <p>
        <strong>{name}</strong>
        <br />
        <span>
          {sets} / {reps} / {tempo} / {rest}s
        </span>
      </p>
      {weights.map((weight, index) =>
        <Set key={index} weight={weight} />
      )}
    </div>
  );
}

export default App;

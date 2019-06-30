import React from 'react';
import './App.css';
import data from './data';

function App() {
  return (
    <div>
      <h1>Workout</h1>
      <Training {...data} />
    </div>
  );
}

function Training({ title, weeks }) {
  return (
    <div>
      <h2>{title}</h2>
      {weeks.map((week) => <Week key={week.title} {...week} />)}
    </div>
  );
}

function Week({ title, days, exercises }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>Days: {days}</p>
      {exercises.map((exercise) => <Exercise {...exercise} />)}
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
          {sets} / {reps} / {tempo} / {rest}s / [{weights.join(", ")}]
        </span>
      </p>
    </div>
  );
}

export default App;

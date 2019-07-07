import React, { Component } from 'react';
import './App.css';
import db from './data';

import Chrome from './components/chrome';
import Exercise from './components/exercise';
import Routine from './components/routine';
import Set from './components/set';
import StopWatch from './components/stopwatch';
import Workout from './components/workout';

const flexStyle = {
  display: 'flex'
};

function Flex({children}) {
  return (
    <div style={flexStyle}>
      {children}
    </div>
  );
}

function Picture({image, alt}) {
  const style = {
    width: '100px',
    height: '100px',
    backgroundImage: `url("${image}")`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <div style={style} />
  );
}

class App extends Component {
  state = db.seed()

  render() {
    const routines = this.state.routines;

    return (
      <Chrome>
        <StopWatch />

        {routines.map(({id, title, workouts}) =>
          <Routine key={id} title={title}>
            {workouts.map(({id, title, days, isVisible, exercises}) =>
              <Workout key={id} id={id} title={title} days={days} onClick={this.handleWorkoutClick}>
                {isVisible && exercises.map(({id, name, sets, reps, tempo, rest, images}) =>
                  <Exercise key={id} name={name} sets={sets.length} reps={reps} tempo={tempo} rest={rest}>
                    <Flex>
                      {images && images.map((i) =>
                        <Picture key={i} image={i} alt="???" />
                      )}
                    </Flex>

                    {sets.map(({id, value, isDone}) =>
                      <Set key={id} id={id} weight={value} isChecked={isDone} onClick={this.handleSetClick} />
                    )}
                  </Exercise>
                )}
              </Workout>
            )}
          </Routine>
        )}
      </Chrome>
    );
  }

  handleWorkoutClick = (workoutId) => {
    this.setState(
      db.updateWorkoutById(this.state, workoutId, toggleFlag('isVisible'))
    );
  }

  handleSetClick = (setId) => {
    this.setState(
      db.updateSetById(this.state, setId, toggleFlag('isDone'))
    );
  }
}

function toggleFlag(flag) {
  return (object) => {
    object[flag] = !object[flag];

    return object;
  };
}

export default App;

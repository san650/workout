import React, { Component } from 'react';
import './App.css';
import db from './data';

import Chrome from './components/chrome';
import Exercise from './components/exercise';
import Routine from './components/routine';
import Set from './components/set';
import StopWatch from './components/stopwatch';
import Workout from './components/workout';

class App extends Component {
  state = db.seed()

  render() {
    const routines = this.state.routines;

    return (
      <Chrome>
        <StopWatch />

        {routines.map((routine) =>
          <Routine key={routine.id} title={routine.title}>
            {routine.workouts.map((workout) =>
              <Workout key={workout.id} id={workout.id} title={workout.title} days={workout.days} onClick={this.handleWorkoutClick}>
                {workout.isVisible && workout.exercises.map((exercise) =>
                  <Exercise key={exercise.name} name={exercise.name} sets={exercise.sets} reps={exercise.reps} tempo={exercise.tempo} rest={exercise.rest}>
                    {exercise.weights.map((weight) =>
                      <Set key={weight.id} id={weight.id} weight={weight.value} isChecked={weight.isDone} onClick={this.handleSetClick} />
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

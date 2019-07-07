import InclineDumbbellFlys1 from './images/incline-dumbbell-flys-1.png';
import InclineDumbbellFlys2 from './images/incline-dumbbell-flys-2.png';

import InclineShoulderPressDumbbell1 from './images/incline-shoulder-press-dumbbell-1.png';
import InclineShoulderPressDumbbell2 from './images/incline-shoulder-press-dumbbell-2.png';

import TricepsDips1 from './images/tricep-dips-using-body-weight-1.png';
import TricepsDips2 from './images/tricep-dips-using-body-weight-2.png';

import BenchPress1 from './images/bench-press-1.png';
import BenchPress2 from './images/bench-press-2.png';

import StandingTricepsExtension1 from './images/standing-triceps-extension-2-1.png';
import StandingTricepsExtension2 from './images/standing-triceps-extension-2-2.png';

import WideGripLatPullDown1 from './images/wide-grip-lat-pull-down-1.png';
import WideGripLatPullDown2 from './images/wide-grip-lat-pull-down-2.png';

import SeatedCableRows1 from './images/seated-cable-rows-1.png';
import SeatedCableRows2 from './images/seated-cable-rows-2.png';

import UnderhandPullDowns1 from './images/underhand-pull-downs-1.png';
import UnderhandPullDowns2 from './images/underhand-pull-downs-2.png';

import StandingInnerBicepsCurlWithDumbbell1 from './images/standing-inner-biceps-curl-with-dumbbell-1.png';
import StandingInnerBicepsCurlWithDumbbell2 from './images/standing-inner-biceps-curl-with-dumbbell-2.png';



let uniqueIdGenerator = 0;

function uniqueId() {
  return ++uniqueIdGenerator;
}

function set(value) {
  return {
    value,
    id: uniqueId()
  };
}

function exercise(name, reps, tempo, rest, sets, images) {
  return {
    id: uniqueId(),
    name,
    images,
    sets: sets.map(set),
    reps,
    tempo,
    rest,
  };
}

const fourWeekRoutine = {
  id: "fourWeekRoutine",
  title: "Four Week Routine",
  workouts: [
    {
      id: uniqueId(),
      title: "Week 1: Chest And Triceps",
      days: "Saturday / Monday / Wednesday / Friday",
      exercises: [
        exercise("Bench press", '10', '2010', 60, [10,11,11,11,11], [BenchPress1, BenchPress2]),
        exercise("Triceps dips", '6-10', '2110', 60, [6,8,8,8,8], [TricepsDips2, TricepsDips1]),
        exercise("Incline dumbbell press", '12-15', '2010', 60, [7.5, 7.5, 10], [InclineShoulderPressDumbbell2, InclineShoulderPressDumbbell1]),
        exercise("Incline dumbbell fly", '12-15', '2010', 60, [7.5, 7.5, 7.5], [InclineDumbbellFlys2, InclineDumbbellFlys1]),
        exercise("Triceps extension", '12-15', '2010', 60, [7.5, 10, 10], [StandingTricepsExtension1, StandingTricepsExtension2]),
      ]
    },
    {
      id: uniqueId(),
      title: "Week 2: Back And Biceps",
      days: "Sunday / Tuesday / Thursday / Saturday",
      exercises: [
        exercise("Wide grip lat pull down", '6-10', '2011', 60, [10,10,10,10,10], [WideGripLatPullDown2, WideGripLatPullDown1]),
        exercise("Seated cable row", '10', '2010', 60, ['?','?','?','?','?'], [SeatedCableRows1, SeatedCableRows2]),
        exercise("Underhand pull downs", '6-10', '2011', 60, ['?', '?', '?'], [UnderhandPullDowns1, UnderhandPullDowns2]),
        exercise("Standing biceps curl", '12-15', '2011', 60, ['?', '?', '?'], [StandingInnerBicepsCurlWithDumbbell1, StandingInnerBicepsCurlWithDumbbell2]),
        exercise("Seated incline curl", '12-15', '2011', 60, ['?', '?', '?']),
      ]
    }
  ]
};

const seed = {
  routines: [
    fourWeekRoutine
  ]
};

function findWorkoutById(workouts, workoutId) {
  return workouts.find((w) => w.id === workoutId);
}

function findRoutineByWorkoutId(routines, workoutId) {
  return routines.find((r) => findWorkoutById(r.workouts, workoutId));
}

function findSetById(sets, setId) {
  return sets.find((s) => s.id === setId);
}

function findExerciseBySetId(exercises, setId) {
  return exercises.find((e) => findSetById(e.sets, setId));
}

function findWorkoutBySetId(workouts, setId) {
  return workouts.find((w) => findExerciseBySetId(w.exercises, setId));
}

function findRoutineBySetId(routines, setId) {
  return routines.find((r) => findWorkoutBySetId(r.workouts, setId));
}

function updateCollection(state, prop, target, updater) {
  return {
    ...state,
    [prop]: state[prop].map((o) =>
      o !== target ?
      o : updater({...o})
    )
  };
}

export default {
  seed() {
    return seed;
  },

  updateWorkoutById(state, workoutId, updater) {
    const routine = findRoutineByWorkoutId(state.routines, workoutId);
    const workout = findWorkoutById(routine.workouts, workoutId);

    return updateCollection(state, 'routines', routine, (r) =>
      updateCollection(r, 'workouts', workout, updater)
    );
  },

  updateSetById(state, setId, updater) {
    const routine = findRoutineBySetId(state.routines, setId);
    const workout = findWorkoutBySetId(routine.workouts, setId);
    const exercise = findExerciseBySetId(workout.exercises, setId);
    const set = findSetById(exercise.sets, setId);

    return updateCollection(state, 'routines', routine, (r) =>
      updateCollection(r, 'workouts', workout, (w) =>
        updateCollection(w, 'exercises', exercise, (e) =>
          updateCollection(e, 'sets', set, updater)
        )
      )
    )
  }
};

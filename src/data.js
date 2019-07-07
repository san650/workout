let uniqueSetId = 0;

function set(value) {
  return {
    value,
    id: ++uniqueSetId
  };
}

function exercise(name, reps, tempo, rest, sets) {
  return {
    name,
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
      id: 1,
      title: "Week 1: Chest And Triceps",
      days: "Saturday / Monday / Wednesday / Friday",
      exercises: [
        exercise("Bench press", '10', '2010', 60, [10,11,11,11,11]),
        exercise("Triceps dips", '6-10', '2110', 60, [6,8,8,8,8]),
        exercise("Incline dumbbell press", '12-15', '2010', 60, [7.5, 7.5, 10]),
        exercise("Incline dumbbell fly", '12-15', '2010', 60, [7.5, 7.5, 7.5]),
        exercise("Triceps extension", '12-15', '2010', 60, [7.5, 10, 10]),
      ]
    },
    {
      id: 2,
      title: "Week 2: Back And Biceps",
      days: "Sunday / Tuesday / Thursday / Saturday",
      exercises: [
        exercise("Pull up", '6-10', '2011', 60, [10,10,10,10,10]),
        exercise("Bent-over row", '10', '2010', 60, ['?','?','?','?','?']),
        exercise("Chin-up", '6-10', '2011', 60, ['?', '?', '?']),
        exercise("Standing biceps curl", '12-15', '2011', 60, ['?', '?', '?']),
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

export default {
  title: "Four Week Routine",
  weeks: [
    {
      title: "First Week",
      days: 4,
      exercises: [
        exercise("Bench press", 5, '10', '2010', 60, [10,11,11,11,11]),
        exercise("Triceps dips", 5, '6-10', '2110', 60, [6,8,8,8,8]),
        exercise("Incline dumbbell press", 3, '12-15', '2010', 60, [7.5, 7.5, 10]),
        exercise("Incline dumbbell fly", 3, '12-15', '2010', 60, [7.5, 7.5, 7.5]),
        exercise("Triceps extension", 3, '12-15', '2010', 60, [7.5, 10, 10]),
      ]
    }
  ]
};

function exercise(name, sets, reps, tempo, rest, weights) {
  return {
    name,
    sets,
    reps,
    tempo,
    rest,
    weights
  };
}

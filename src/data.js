export default {
  title: "Four Week Routine",
  weeks: [
    {
      title: "Week 1: Chest And Triceps",
      days: "Saturday / Monday / Wednesday / Friday",
      exercises: [
        exercise("Bench press", 5, '10', '2010', 60, [10,11,11,11,11]),
        exercise("Triceps dips", 5, '6-10', '2110', 60, [6,8,8,8,8]),
        exercise("Incline dumbbell press", 3, '12-15', '2010', 60, [7.5, 7.5, 10]),
        exercise("Incline dumbbell fly", 3, '12-15', '2010', 60, [7.5, 7.5, 7.5]),
        exercise("Triceps extension", 3, '12-15', '2010', 60, [7.5, 10, 10]),
      ]
    },
    {
      title: "Week 2: Back And Biceps",
      days: "Sunday / Tuesday / Thursday / Saturday",
      exercises: [
        exercise("Pull up", 5, '6-10', '2011', 60, [10,10,10,10,10]),
        exercise("Bent-over row", 5, '10', '2010', 60, ['?','?','?','?','?']),
        exercise("Chin-up", 3, '6-10', '2011', 60, ['?', '?', '?']),
        exercise("Standing biceps curl", 3, '12-15', '2011', 60, ['?', '?', '?']),
        exercise("Seated incline curl", 3, '12-15', '2011', 60, ['?', '?', '?']),
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

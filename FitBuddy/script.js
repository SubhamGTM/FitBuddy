function suggestWorkout() {
    let goal = document.getElementById("goal").value;
    let workout;

    switch (goal) {
        case "strength":
            workout = "<b>Strength Training Plan:</b><ul><li>Deadlifts - 3 sets of 6 reps</li><li>Bench Press - 3 sets of 8 reps</li><li>Squats - 3 sets of 10 reps</li><li>Pull-ups - 3 sets to failure</li><li>Planks - 3 rounds of 1 minute</li></ul>";
            break;
        case "weight_loss":
            workout = "<b>Weight Loss Plan:</b><ul><li>HIIT Workouts - 20 minutes</li><li>Jump Rope - 3 rounds of 3 minutes</li><li>Running - 30 minutes</li><li>Burpees - 3 sets of 15 reps</li><li>Core Workouts - 10-minute circuit</li></ul>";
            break;
        case "flexibility":
            workout = "<b>Flexibility Training Plan:</b><ul><li>Yoga - 30 minutes</li><li>Dynamic Stretching - 10 minutes</li><li>Pilates - 20 minutes</li><li>Foam Rolling - 10 minutes</li><li>Static Stretching - 10 minutes</li></ul>";
            break;
        case "endurance":
            workout = "<b>Endurance Training Plan:</b><ul><li>Long-Distance Running - 5-10 km</li><li>Swimming - 30 minutes</li><li>Cycling - 40 minutes</li><li>Rowing - 20 minutes</li><li>Interval Sprints - 5 rounds of 30 seconds</li></ul>";
            break;
        case "muscle_gain":
            workout = "<b>Muscle Gain Plan:</b><ul><li>Heavy Weight Training - 4 sets of 6 reps</li><li>Progressive Overload Strategy</li><li>High Protein Diet Support</li><li>Rest and Recovery - At least 8 hours of sleep</li><li>Compound Exercises - Squats, Bench Press, Deadlifts</li></ul>";
            break;
        default:
            workout = "Please select a valid fitness goal.";
    }

    document.getElementById("workout").innerHTML = workout;
}
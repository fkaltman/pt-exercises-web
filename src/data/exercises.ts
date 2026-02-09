export type Exercise = {
  id: number;
  name: string;
  reps: string;
  completed: boolean;
  frequency: "daily" | "odd";
  sets: number;
  completedSets: boolean[];
};


export const initialExercises: Exercise[] = [

  {
    id: 1,
    name: "Reverse Kegels",
    reps: "3 sets of 15",
    completed: false,
    frequency: "daily",
    sets: 3,
    completedSets: [false, false, false],
  },
  {
    id: 2,
    name: "Child's Pose Breathing",
    reps: "3 sets of 20",
    completed: false,
    frequency: "daily",
    sets: 3,
    completedSets: [false, false, false],
  },
  {
    id: 3,
    name: "Lumbar Wall Lean",
    reps: "3 sets of 15",
    completed: false,
    frequency: "daily",
    sets: 3,
    completedSets: [false, false, false],
  },
  {
    id: 4,
    name: "Donkey Kicks",
    reps: "30x each side",
    completed: false,
    frequency: "daily",
    sets: 3,
    completedSets: [false, false, false],
  },
  {
    id: 5,
    name: "Single Leg Bridge 12lbs",
    reps: "8x each leg",
    completed: false,
    frequency: "odd",
    sets: 3,
    completedSets: [false, false, false],
  },
  {
    id: 6,
    name: "Superman",
    reps: "Hold for 20 seconds",
    completed: false,
    frequency: "odd",
    sets: 3,
    completedSets: [false, false, false],
  },
  {
    id: 7,
    name: "Step Up",
    reps: "8x each leg",
    completed: false,
    frequency: "odd",
    sets: 3,
    completedSets: [false, false, false],
  },
  {
    id: 8,
    name: "Squats with 20lbs",
    reps: "8x each leg",
    completed: false,
    frequency: "odd",
    sets: 3,
    completedSets: [false, false, false],
  },
  {
    id: 9,
    name: "Suitcase Carry with 20lbs",
    reps: "Walk ~20ft each side",
    completed: false,
    frequency: "odd",
    sets: 3,
    completedSets: [false, false, false],
  },
];
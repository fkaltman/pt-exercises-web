import { useEffect, useState } from "react";
import { initialExercises, type Exercise } from "../data/exercises";

const STORAGE_KEY = "@exercises";
const VERSION_KEY = "@exercises_version";
const CURRENT_VERSION = "2"; // Increment this when you change the exercise structure

export function useExercises() {
  const [exercises, setExercises] = useState<Exercise[]>(initialExercises);

  // Load from localStorage on mount
  useEffect(() => {
    const storedVersion = localStorage.getItem(VERSION_KEY);
    if (storedVersion !== CURRENT_VERSION) {
      // Clear old data if version doesn't match
      localStorage.removeItem(STORAGE_KEY);
      localStorage.setItem(VERSION_KEY, CURRENT_VERSION);
    } else {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setExercises(JSON.parse(stored));
    }
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(exercises));
  }, [exercises]);

  const toggleSet = (id: number, setIndex: number) => {
    setExercises(
      exercises.map((exercise) => {
        if (exercise.id === id) {
          const newCompletedSets = [...exercise.completedSets];
          newCompletedSets[setIndex] = !newCompletedSets[setIndex];
          const allCompleted = newCompletedSets.every((set) => set === true);
          return {
            ...exercise,
            completedSets: newCompletedSets,
            completed: allCompleted,
          };
        }
        return exercise;
      }),
    );
  };

  const dailyExercises = exercises.filter((ex) => ex.frequency === "daily");
  const oddDayExercises = exercises.filter((ex) => ex.frequency === "odd");
  const isOddDay = new Date().getDate() % 2 === 1;

  return { dailyExercises, oddDayExercises, isOddDay, toggleSet };
}

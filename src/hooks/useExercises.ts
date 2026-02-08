import { useEffect, useState } from "react";
import { initialExercises, type Exercise } from "../data/exercises";

const STORAGE_KEY = "@exercises";

export function useExercises() {
  const [exercises, setExercises] = useState<Exercise[]>(initialExercises);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) setExercises(JSON.parse(stored));
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

  const resetExercises = () => {
    localStorage.removeItem(STORAGE_KEY);
    setExercises(initialExercises);
  };

  const dailyExercises = exercises.filter((ex) => ex.frequency === "daily");
  const evenDayExercises = exercises.filter((ex) => ex.frequency === "even");
  const isEvenDay = new Date().getDate() % 2 === 0;

  return { dailyExercises, evenDayExercises, isEvenDay, toggleSet, resetExercises };
}

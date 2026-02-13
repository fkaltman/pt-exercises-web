import { useState } from 'react';
import { useExercises } from "./hooks/useExercises";
import { useWakeLock } from "./hooks/useWakeLock";
import logo from "./assets/pelvic_power_logo.webp";
import "./App.css";

function App() {
  const { dailyExercises, oddDayExercises, isOddDay, toggleSet } =
    useExercises();
  const { isActive } = useWakeLock();
  const [showOddExercises, setShowOddExercises] = useState(false);

  const currentDate = new Date().toLocaleDateString("en-US", {
    month: "numeric",
    day: "numeric",
    year: "2-digit",
  });

  return (
    <div className="container">
      <div className="logo-container">
        <img src={logo} className="logo" alt="Pelvic Power" />
        {isActive && (
          <span className="wake-lock-badge" title="Screen staying awake">
            ☀️
          </span>
        )}
      </div>

      <div className="scroll-view">
        {/* Daily Exercises Section */}
        <div className="section-header-row">
          <span className="section-header">Daily Exercises</span>
          <span className="date-text">{currentDate}</span>
        </div>
        {dailyExercises.map((exercise) => (
          <div key={exercise.id} className="exercise-item">
            <div className="checkbox-container">
              {exercise.completedSets.map((isCompleted, index) => (
                <button
                  key={index}
                  className="checkbox"
                  onClick={() => toggleSet(exercise.id, index)}
                >
                  {isCompleted && <div className="checkbox-checked" />}
                </button>
              ))}
            </div>
            <div className="exercise-info">
              <span
                className={
                  "exercise-name" + (exercise.completed ? " completed" : "")
                }
              >
                {exercise.name}
              </span>
              <span
                className={
                  "exercise-reps" + (exercise.completed ? " completed" : "")
                }
              >
                {exercise.reps}
              </span>
            </div>
          </div>
        ))}

        {/* Toggle for even days to view odd exercises */}
        {!isOddDay && (
          <div className="toggle-container">
            <label className="toggle-label">
              <input
                type="checkbox"
                checked={showOddExercises}
                onChange={(e) => setShowOddExercises(e.target.checked)}
                className="toggle-checkbox"
              />
              <span className="toggle-switch"></span>
              <span className="toggle-text"> Show odd day exercises</span>
            </label>
            </div>
        )}

        {/* Odd Day Exercises Section - only show on odd days */}
        {(isOddDay || showOddExercises) && (
          <>
            <div className="section-header-row">
              <span className="section-header">Odd Day Exercises</span>
            </div>
            {oddDayExercises.map((exercise) => (
              <div key={exercise.id} className="exercise-item">
                <div className="checkbox-container">
                  {exercise.completedSets.map((isCompleted, index) => (
                    <button
                      key={index}
                      className="checkbox"
                      onClick={() => toggleSet(exercise.id, index)}
                    >
                      {isCompleted && <div className="checkbox-checked" />}
                    </button>
                  ))}
                </div>
                <div className="exercise-info">
                  <span
                    className={
                      "exercise-name" + (exercise.completed ? " completed" : "")
                    }
                  >
                    {exercise.name}
                  </span>
                  <span
                    className={
                      "exercise-reps" + (exercise.completed ? " completed" : "")
                    }
                  >
                    {exercise.reps}
                  </span>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default App;

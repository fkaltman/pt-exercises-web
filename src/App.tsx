import { useExercises } from "./hooks/useExercises";
import logo from "./assets/pelvic_power_logo.webp";
import "./App.css";

function App() {
  const {
    dailyExercises,
    evenDayExercises,
    isEvenDay,
    toggleSet,
  } = useExercises();

  const currentDate = new Date().toLocaleDateString("en-US", {
    month: "numeric",
    day: "numeric",
    year: "2-digit",
  });

  return (
    <div className="container">
      <div className="logo-container">
        <img src={logo} className="logo" alt="Pelvic Power" />
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

        {/* Even Day Exercises Section - only show on even days */}
        {isEvenDay && (
          <>
            <div className="section-header-row">
              <span className="section-header">Even Day Exercises</span>
            </div>
            {evenDayExercises.map((exercise) => (
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

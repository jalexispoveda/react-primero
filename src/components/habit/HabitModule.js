import React, { useState } from "react";
import CreateHabit from "./CreateHabit";
import { v4 as uuid } from "uuid";
import HabitList from "./HabitsList";

const HabitModule = () => {
  const [isEnabledCreateHabit, setIsEnabledCreateHabit] = useState(false);
  const [habits, setHabits] = useState([]);

  const enableCreateHabit = () => {
    setIsEnabledCreateHabit(!isEnabledCreateHabit);
  };

  const getCreatedHabit = (habit) => {
    const unique_id = uuid();
    setHabits([...habits, { ...habit, id: unique_id }]);
    console.log(habits);
  };

  return (
    <React.Fragment>
      <h1>Habit Tracker</h1>
      <button title="Create new habit" onClick={enableCreateHabit}>
        Create new habit
      </button>
      {isEnabledCreateHabit && (
        <CreateHabit getCreatedHabit={getCreatedHabit} />
      )}
      <HabitList habitList={habits}></HabitList>
    </React.Fragment>
  );
};

export default HabitModule;

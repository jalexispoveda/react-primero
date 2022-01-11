import React from "react";
import { useForm } from "react-hook-form";
import { MultiSelect } from "react-multi-select-component";
//import PropTypes from "prop-types";

const CreateHabit = (props) => {
  const { register, handleSubmit } = useForm();

  const saveHabit = (habit) => {
    props.getCreatedHabit(habit);
  };

  return (
    <React.Fragment>
      <form className="App">
        <input
          type="text"
          placeholder="title"
          name="title"
          {...register("title")}
        />
        <input
          type="text"
          placeholder="description"
          name="description"
          {...register("description")}
        />
        {/* <MultiSelect></MultiSelect> */}
        <input type="submit" onClick={handleSubmit(saveHabit)} />
      </form>
    </React.Fragment>
  );
};

// CreateHabit.propTypes = {
//   getCreatedHabit: PropTypes.function,
// };

export default CreateHabit;

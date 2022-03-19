import React from "react";
import { memo } from "react/cjs/react.production.min";

const HabitAddForm = memo((props) => {
  console.log("habitAddForm");
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    // this.inputRef.current.value = "";
    formRef.current.reset();
  };

  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="add-input"
        placeholder="Please enter your habit"
      />
      <button className="add-button">Add</button>
    </form>
  );
});

export default HabitAddForm;

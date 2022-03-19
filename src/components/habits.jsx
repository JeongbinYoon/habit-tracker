import React, { Component } from "react";
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";

class Habits extends Component {
  handleAdd = (name) => {
    this.props.onAdd(name);
  };
  render() {
    console.log("Habits");
    return (
      <>
        <HabitAddForm onAdd={this.handleAdd} />
        <ul className="habits">
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete}
            />
          ))}
        </ul>
        <div className="habits-reset">
          <button className="habits-resetBtn" onClick={this.props.onReset}>
            Reset All
          </button>
        </div>
      </>
    );
  }
}

export default Habits;

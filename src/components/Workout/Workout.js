import React from "react";
import "./Workout.css";
const Workout = (props) => {
  const { workout, addToTime } = props;
  return (
    <div className="workout">
      <img src={workout.img} alt="" />
      <div className="workout-info">
        <p className="workout-name">{workout.name}</p>
        <p>{workout.details}</p>
        <p>Age : {workout.age}</p>
        <p>Time : {workout.time}s</p>
      </div>
      <button onClick={() => addToTime(workout)} className="addlist">
        <p>Add To list</p>
      </button>
    </div>
  );
};

export default Workout;

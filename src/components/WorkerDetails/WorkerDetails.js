import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./WorkerDetails.css";
const WorkerDetails = (props) => {
  const timePlus = props.timePlus;

  const firstBreak = () => {
    const text = document.getElementById("1st-button").innerText;
    document.getElementById("final-time").innerText = text;
  };
  const secondBreak = () => {
    const text = document.getElementById("2nd-button").innerText;
    document.getElementById("final-time").innerText = text;
  };
  const thirdBreak = () => {
    const text = document.getElementById("3rd-button").innerText;
    document.getElementById("final-time").innerText = text;
  };
  const fourthBreak = () => {
    const text = document.getElementById("4th-button").innerText;
    document.getElementById("final-time").innerText = text;
  };
  const completed = () =>
    toast("Nice JOb", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  let Time = 0;
  for (const exerciseTime of timePlus) {
    Time = Time + exerciseTime.time;
  }

  return (
    <div className="WorkerDetails">
      <div className="WorkerDetails-info">
        <div>
          <p className="faizul">Syeda Amina</p>
          <small>Moulvibazar ,Sylhet</small>
        </div>
      </div>
      <div className="info-cart">
        <div>
          <h2>
            45<small className="text">kg</small>
          </h2>
          <p>Weight</p>
        </div>
        <div>
          <h2>8.1</h2>
          <p>Height</p>
        </div>
        <div>
          <h2>
            25<small className="text">years</small>
          </h2>
          <p>Age</p>
        </div>
      </div>
      <h3>Add A Break</h3>
      <div className="break">
        <button id="1st-button" onClick={firstBreak}>
          10s
        </button>
        <button id="2nd-button" onClick={secondBreak}>
          20s
        </button>
        <button id="3rd-button" onClick={thirdBreak}>
          30s
        </button>
        <button id="4th-button" onClick={fourthBreak}>
          40s
        </button>
      </div>
      <h3>Exercise-information</h3>
      <div className="Time">
        <h4>Exercise Time</h4>
        <p>{Time} min</p>
      </div>
      <div className="Time">
        <h4>Break Time</h4>
        <p id="final-time">00s</p>
      </div>
      <button className="btn" onClick={completed}>
        See activity
      </button>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default WorkerDetails;

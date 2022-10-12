import React from "react";
import "./QA.css";

const QA = () => {
  return (
    <div>
      <h1 className="QA-head">Get Your Answer</h1>
      <div>
        <div className="answer-div">
          <h3 className="question">Question-01 : How dose react work?</h3>
          <h4>Master your language with lessons, quizzes, and projects designed for real-life scenarios. Take your skills to a new level and join millions of users that have learned ReactJS</h4>
        </div>
        <div className="answer-div">
          <h3 className="question">Question-02 : What is the difference between props and state?</h3>
          <h4>The state is an updatable structure that is used to contain data or information about the component and can change over time. Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. </h4>
        </div>
        <div className="answer-div">
          <h3 className="question">Question-03 : What are the use of useEFfect?</h3>
          <h4>By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”, and call it later after performing the DOM updates.</h4>
        </div>
      </div>
    </div>
  );
};

export default QA;

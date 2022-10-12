import React, { useEffect, useState } from 'react';
import Workout from '../Workout/Workout';
import WorkerDetails from '../WorkerDetails/WorkerDetails';
import './GYMBody.css'

const GYMBody = () => {
    const [workouts, setWorkouts] = useState([])
    const [timePlus, setTimePlus] = useState([])

    useEffect( () => {
        fetch('workoutdb.json')
        .then(res => res.json())
        .then(data => setWorkouts(data))
    } ,[])

     const addToTime = (workout) =>{
      const newPlus = [...timePlus, workout]
      setTimePlus(newPlus);
     }
    return (
        <div className='gym-container'>
            <div>
                  <h1 className='left-heading'>Select Todays Exercises</h1>  
                <div className='workout-container'>
                {
               workouts.map( workout => <Workout 
                key = {workout.id}
                workout = {workout}
                addToTime = {addToTime}
                ></Workout>)
                }
                </div>
            </div>
            <div className='WorkerDetails-container'>
               <WorkerDetails
               timePlus = {timePlus}
               ></WorkerDetails>
            </div>
        </div>
    );
};

export default GYMBody;
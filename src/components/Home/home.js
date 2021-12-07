/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';

import './home.styles.css';

const Home = (props) => {
  const exerciseSelector = props.exerciseSelector;
  const rounds = useRef();

  const [selectedExercise, setSelectedExercise] = useState('box');
  const changeSelectorHandler = function (event) {
    console.log('ex', event.target.value);
    setSelectedExercise(event.target.value);
    console.log(rounds.current.value);
  };
  const handleSubmit = function (e) {
    let selectedRounds = rounds.current.value;
    exerciseSelector(e, selectedExercise, selectedRounds);
  };
  return (
    <div className='form_container'>
      <form>
        <label>Select Your Exercise</label>
        <br />
        <br />
        <select value={selectedExercise} onChange={changeSelectorHandler}>
          <option value='box'>Box Breathing 4x4</option>
          <option value='circle'>Circular Breathing 5X5</option>
          <option value='fast'>Rapid Breathing + hold</option>
        </select>
        <label>Select Number of Rounds </label>
        <select ref={rounds}>
          <option>4</option>
          <option>6</option>
          <option>8 </option>
          <option>10 </option>
        </select>
        <br />
        <button onClick={handleSubmit} type='button'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Home;

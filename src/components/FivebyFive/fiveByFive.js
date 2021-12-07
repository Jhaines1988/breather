/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

import './fiveByFive.styles.css';
const FiveByFive = function (props) {
  const totalTime = 11000;
  const cycle = 5500;
  const timer = function () {
    let text = document.getElementById('text');
    let container = document.getElementById('container_five');
    let circle = document.getElementById('circle_five');
    text.innerText = 'Breathe In';
    container.className = 'container_five grow';
    circle.className = 'circle_five in';
    setTimeout(() => {
      text.innerText = 'Breathe Out';
      circle.className = 'circle_five out';
      container.className = 'container_five shrink';
    }, cycle);
  };
  useEffect(() => {
    startAnimation();
  });

  const startAnimation = function () {
    timer();
    setInterval(timer, totalTime);
  };
  return (
    <div className='outer_container_five'>
      <div id='text' className='text'></div>
      <div className='container_five' id='container_five'>
        <div className='circle_five' id='circle_five'></div>
        <div className='pointer-container_five'>
          <div className='pointer_five'></div>
        </div>

        <CountDown />
        <div className='gradient-circle_five'></div>
      </div>
    </div>
  );
};

const CountDown = function () {
  const [counter, setCounter] = useState(1);
  useEffect(() => {
    if (counter <= 5) {
      setTimeout(() => setCounter(counter + 1), 1000);
    } else if (counter > 5) {
        setCounter(5.5)
        setTimeout(()=>setCounter(1),500);
    }


    // else {
    //   setTimeout(()=>setCounter(1),500);
    // }
  }, [counter]);

  return <div className='counter'> {counter} </div>;
};

/*


This component is a simple breathing exerise that takes 5.5 seconds on the inhale and 5.5 seconds on the exhale


There are no pauses, so we only need a grow and shrink phase



Start with a circle or add the little white ball?
- possible have the ball on the inside?



-steps
stub out basic component
  - total time
  -cycle time
  - html structure
  -css



*/

export default FiveByFive;

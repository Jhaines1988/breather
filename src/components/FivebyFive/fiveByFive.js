/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import _ from 'underscore';
import './fiveByFive.styles.css';
import roundDots from '../Helpers/roundDots';
import Axios from 'axios';
const FiveByFive = function (props) {
  const [cycle, setCycle] = useState(0);
  const [roundsCompleted, setRoundsCompleted] = useState(1);
  const totalTime = 11000;
  const breatheTime = 5500;
  const rounds = Number(props.rounds);

  const containerRef = useRef();
  const textRef = useRef();
  const circleRef = useRef();
  const roundsRef = useRef();
  const timer = function () {
    let text = textRef.current;
    let container = containerRef.current;
    let circle = circleRef.current;
    let roundsToggle = roundsRef.current.childNodes;
    text.innerText = 'Breathe In';
    container.className = 'container_five grow';

    setTimeout(() => {
      text.innerText = 'Breathe Out';

      container.className = 'container_five shrink';
      setTimeout(() => {
        setCycle(cycle + 1);
        if (rounds > roundsCompleted) {
          roundsToggle[cycle].className = 'dot_5 completed_5';
          setRoundsCompleted(roundsCompleted + 1);
        }
      }, breatheTime);
    }, breatheTime);
  };

  const roundArray = roundDots(rounds);

  useEffect(() => {
    if (cycle < rounds) {
      timer();
    }

    return () => {
      if (cycle === rounds - 1) {
        let text = textRef.current;
        text.innerText = 'Done!';


      }
      if (roundsCompleted === rounds) {
        let body ={user:'',rounds,exercise:props.exercise}
        Axios.post('http://localhost:3000/completedExercise', body)
          .then((results) => {
            console.log('res', results.data);
          })
          .catch((err) => {
            console.log('error');
          });
      }
    };
  });

  return (
    <div className='outer_container_five'>
      <div className='container_five' id='container_five' ref={containerRef}>
        <div className='circle_five' id='circle_five' ref={circleRef}></div>
        <div className='gradient-circle_five'></div>
      </div>
      <div className='round-container_5' ref={roundsRef}>
        {roundArray.map((rounds) => {
          return <span key={rounds} id={rounds} className='dot_5'></span>;
        })}
      </div>
      <div id='text' className='text_five' ref={textRef}></div>
    </div>
  );
};

const CountDown = function () {
  const [counter, setCounter] = useState(1);
  useEffect(() => {
    if (counter < 5) {
      setTimeout(() => setCounter(counter + 1), 1000);
    } else {
      setTimeout(() => setCounter(1), 1500);
    }
  }, [counter]);

  return <div className='counter_5'> {counter} </div>;
};

export default FiveByFive;
/* span[data-descr]{
   font-size: xx-large;
   color:blue;
 } */
/* span[data-descr]:hover::after,
 span[data-descr]:focus::after{
   font-size: xx-large;
   color:rgb(255, 0, 0);
   content:attr(data-descr);
 } */
/* .round {
  font-size: xxx-large;
  color: red;
  font-weight: 900;
} */

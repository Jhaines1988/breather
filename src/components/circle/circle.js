/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import './styles.css';
import { hot } from 'react-hot-loader/root';

const ExpandContract = function (props) {
  const [cycle, setCycle] = useState(0);
  const [roundsCompleted, setRoundsCompleted] = useState(1);
  const totalTime = 16000;
  const rounds = Number(props.rounds);
  let totalReps = 0;
  const breatheTime = totalTime / 4;
  const holdTime = totalTime / 4;
  const containerRef = useRef();
  const textRef = useRef();
  const circleRef = useRef();
  const timer = function (callback) {
    console.log('cycle', cycle);
    let text = textRef.current;
    let container = containerRef.current;
    let circle = circleRef.current;
    text.innerText = 'Breathe In';
    container.className = 'container grow';
    circle.className = 'circle in';

    setTimeout(() => {
      text.innerText = 'Hold';
      circle.className = 'circle hold';

      setTimeout(() => {
        text.innerText = 'Breathe Out';
        container.className = 'container shrink';
        circle.className = 'circle out';
        setTimeout(() => {
          text.innerText = 'Hold';
          circle.className = 'circle holdout';
          setTimeout(() => {
            setCycle(cycle + 1);
            if (rounds > roundsCompleted) {
              setRoundsCompleted(roundsCompleted + 1);
            }
          }, holdTime);
        }, holdTime);
      }, holdTime);
    }, breatheTime);
  };

  useEffect(() => {
    if (cycle < rounds) {
      timer();
    }

    return () => {
      if (cycle === rounds - 1) {
        let text = textRef.current;
        text.innerText = 'Done!';
      }
    };
  });

  return (
    <div className='outer_container'>
      <span data-descr='Hello!' className='round'> Round:{roundsCompleted}</span>
      <div className='container' id='container' ref={containerRef}>
        <div id='circle' className='circle' ref={circleRef}></div>

        {/* <div className='pointer-container'>
          <div className='pointer'></div>
        </div> */}
        {/* <CountDown reps={totalReps} /> */}

        <div className='text' id='text' ref={textRef}>
          Breathe In
        </div>
        <div className='gradient-circle'></div>
      </div>
    </div>
  );
};

const CountDown = function (props) {
  const [repetition, setRepetition] = useState(0);
  const [counter, setCounter] = useState(1);
  useEffect(() => {
    if (counter < 5) {
      var time = setTimeout(() => {
        setCounter(counter + 1);
      }, 1000);
    } else {
      console.log('reps', repetition);
      setRepetition(repetition + 0.5);
      setCounter(1);
    }
    if (repetition === 2) {
      clearTimeout(time);
      return;
    }
  }, [counter]);
  return <div className='counter'> {counter} </div>;
  // return repetition < 2 ? (
  //   <div className='counter'> {counter} </div>
  // ) : (
  //   <div>Done</div>
  // );
};

export default ExpandContract;

// let circle = document.getElementById('circle');
// let text = document.getElementById('text');

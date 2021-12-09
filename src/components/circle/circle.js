/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import './styles.css';
import { hot } from 'react-hot-loader/root';
import _ from 'underscore';
import roundDots from '../Helpers/roundDots';
const ExpandContract = function (props) {
  const [cycle, setCycle] = useState(0);
  const [roundsCompleted, setRoundsCompleted] = useState(1);
  const totalTime = 16000;
  const rounds = Number(props.rounds);

  const breatheTime = totalTime / 4;
  const holdTime = totalTime / 4;
  const containerRef = useRef();
  const textRef = useRef();
  const circleRef = useRef();
  const roundsRef = useRef();
  const timer = function (callback) {
    let roundsToggle = roundsRef.current.childNodes;
    let text = textRef.current;
    let container = containerRef.current;
    let circle = circleRef.current;
    text.innerText = 'Breathe In';
    container.className = 'container grow';
    // circle.className = 'circle in';

    setTimeout(() => {
      text.innerText = 'Hold';
      // circle.className = 'circle hold';

      setTimeout(() => {
        text.innerText = 'Breathe Out';
        container.className = 'container shrink';
        // circle.className = 'circle out';
        setTimeout(() => {
          text.innerText = 'Hold';
          // circle.className = 'circle holdout';
          setTimeout(() => {
            setCycle(cycle + 1);
            if (rounds > roundsCompleted) {
              roundsToggle[cycle].className = 'dot completed';

              setRoundsCompleted(roundsCompleted + 1);
            }
          }, holdTime);
        }, holdTime);
      }, holdTime);
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
    };
  });

  return (

      <div className='outer_container'>

        <div className='container' id='container' ref={containerRef}>
          <div id='circle' className='circle' ref={circleRef}></div>

          <div className='gradient-circle'></div>
        </div>

        <div className='round-container' ref={roundsRef}>
          {roundArray.map((rounds) => {
            return <span key={rounds} id={rounds} className='dot'></span>;
          })}
        </div>
        <div className='text' id='text' ref={textRef}>
        Breathe In
      </div>
      </div>


  );
};

export default ExpandContract;

// let circle = document.getElementById('circle');
// let text = document.getElementById('text');
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

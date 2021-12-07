/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import './styles.css';
import { hot } from 'react-hot-loader/root';
const ExpandContract = function (props) {
  const [cycle, setCycle] = useState('grow');
  console.log('hey', props);
  const totalTime = 16000;
  // const breatheTime = (totalTime / 5) * 2;
  // const holdTime = totalTime / 5;
  let totalReps = 0;
  const breatheTime = totalTime / 4;
  const holdTime = totalTime / 4;
  const containerRef = useRef();
  var text = 'Breathe In';


  const timer = function (callback) {
    console.log('totalreps',totalReps)
    // if (totalReps === 2) {
    //   startAnimation();
    //   return;
    // }
    let text = document.getElementById('text');
    let container = containerRef.current;
    let circle = document.getElementById('circle');
    text.innerText = 'Breathe In';
    container.className = 'container grow';
    circle.className = 'circle in';
    var t = setTimeout(() => {
      text.innerText = 'Hold';
      circle.className = 'circle hold';
      console.log('totalreps1',totalReps)
      setTimeout(() => {
        console.log('totalreps2',totalReps)
        text.innerText = 'Breathe Out';
        container.className = 'container shrink';
        circle.className = 'circle out';
        setTimeout(() => {
          console.log('totalreps3',totalReps)
          text.innerText = 'Hold';
          circle.className = 'circle holdout';
          totalReps++;
        }, holdTime);
      }, holdTime);
    }, breatheTime);
  };


  // useEffect(() => {
  //   startAnimation();
  // },[])
  useEffect(() => {
    console.log('in effect')
    timer()
    // var int = setInterval(timer,totalTime)
    var int = setInterval(() => {
      timer
    }, totalTime);
    return () => {
      console.log('incleanup')
      // if (totalReps === 2) {
      //   console.log('morethan2')
      //   clearInterval(int);

      // }
    }
  });

  // const startAnimation = function () {
  //   console.log('were in the function ');
  //   if (totalReps === 2) {
  //     clearInterval(interval);
  //     return;
  //   }
  //   timer();
  //   var interval = setInterval(timer, totalTime);
  // };
  const endAnimation = function () {};
  return (
    <div className='outer_container'>
      <div className='text' id='text'>
        {text}
      </div>
      <div className='container' id='container' ref={containerRef}>
        <div id='circle' className='circle'></div>

        <div className='pointer-container'>
          <div className='pointer'></div>
        </div>
        <CountDown reps={totalReps} />

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

  return repetition < 2 ? (
    <div className='counter'> {counter} </div>
  ) : (
    <div>Done</div>
  );
};

export default hot(ExpandContract);

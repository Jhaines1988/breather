/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import './styles.css';
import Home from '../Home/home';
import Counter from '../Counter.js'
import ExpandContract from '../circle/circle';
import FiveByFive from '../FivebyFive/fiveByFive';
const App = function () {
  const [selected, setSelected] = useState('home');
  const [numberOfRounds,setNumberOfRounds] = useState(4)
  let exerciseSelector = function (event, exercise,rounds) {

    console.log('roundsfromapp',rounds)
    setSelected(exercise);
    setNumberOfRounds(rounds);
  };

  return selected === 'home' ? (
    <div className='home'>
      <Home exerciseSelector={exerciseSelector} />
      {/* <Counter/> */}
    </div>
  ) : selected === 'box' ? (
    <>
      <ExpandContract rounds={numberOfRounds}/>
    </>
  ) : (
    <>
      <FiveByFive />
    </>
  );
};

export default hot(App);

/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import Axios from 'axios'
import './styles.css';
import Home from '../Home/home';
import Counter from '../Counter.js'
import ExpandContract from '../circle/circle';
import FiveByFive from '../FivebyFive/fiveByFive';
import Tooltips from '../Tooltips/tooltips';
const App = function () {
  const [selected, setSelected] = useState('s');
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
      <Tooltips/>
    </div>
  ) : selected === 'box' ? (
    <>
      <ExpandContract rounds={numberOfRounds}/>
    </>
  ) : (
    <>
      <FiveByFive rounds={numberOfRounds} />
    </>
  );
};

export default hot(App);

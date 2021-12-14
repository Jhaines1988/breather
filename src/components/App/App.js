/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import Axios from 'axios';
import './styles.css';
import Home from '../Home/home';
import Counter from '../Counter.js';
import ExpandContract from '../circle/circle';
import FiveByFive from '../FivebyFive/fiveByFive';
import Tooltips from '../Tooltips/tooltips';
import Login from '../Login/login';
const App = function () {
  const [selected, setSelected] = useState('home');
  const [numberOfRounds, setNumberOfRounds] = useState(4);
  let exerciseSelector = function (event, exercise, rounds) {
    console.log('roundsfromapp', rounds);
    setSelected(exercise);
    setNumberOfRounds(rounds);
  };

  const loginHandler = function( userInfo){

    Axios.post('http://localhost:3000/login',userInfo)
    .then((results)=>{
      console.log(results.data)
      setSelected('home')
    })
    .catch((err)=>{
      console.log('error',err)
    })

  }

  return selected === 'login' ? (
    <>
      <Login loginHandler={loginHandler}/>
    </>
  ) : selected === 'home' ? (
    <div className='home'>
      <Home exerciseSelector={exerciseSelector} />
      {/* <Counter/> */}
      {/* <Tooltips /> */}
    </div>
  ) : selected === 'box' ? (
    <>
      <ExpandContract rounds={numberOfRounds} />
    </>
  ) : (
    <>
      <FiveByFive exercise={selected}rounds={numberOfRounds} />
    </>
  );
};

export default hot(App);

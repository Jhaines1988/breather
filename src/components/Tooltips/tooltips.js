import React, { useState, useEffect, useRef } from 'react';

import './tooltips.styles.css';

const Tooltips = function (props) {
  return (
    <div className='tooltip_container'>
      <label> Hover Over Exercise for Details </label>
      <ul>
        <li className='tooltip'>
          Box Breathing 4x4
          <span className='tooltiptext'>
            This is one of the most classic breathing exercises.{<br />} To
            perform this exercise you will:{<br />} 1:Breathe in for 4 seconds
            {<br />} 2:Hold your breath for 4 seconds{<br />} 3:Breathe out for 4
            seconds{<br />} 4:Hold your breath for 4 seconds{<br />} This will
            count as one round of the exercise.{' '}
          </span>
        </li>
        <li className='tooltip'>
          Circular Breathing 5x5
          <span className='tooltiptext'>
            Often Referred to as "Perfect Breath", the 5x5 exercise times your
            inhales and exhales to be 5.5 seconds each. This style of breathing
            is associated with optimal cardiac coherence. This means how well
            your entire system is operating in relationship to your heartbeat
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Tooltips;

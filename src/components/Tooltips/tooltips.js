import React, { useState, useEffect, useRef } from 'react';

import './tooltips.styles.css';

const Tooltips = function (props) {
  return (
    <div className='tooltip_container'>
      <label> Hover Over Exercise for Details </label>
      <ul>
        <li className='tooltip'>
          Box Breathing 4x4
          <span className='tooltiptext'>Yo</span>
        </li>
        <li className='tooltip'>Circular Breathing 5x5
        <span className='tooltiptext'>Yo2</span>
        </li>
      </ul>
    </div>
  );
};

export default Tooltips;

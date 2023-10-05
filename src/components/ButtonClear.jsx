import React from 'react';
import '../styles/ButtonClear.css';

function ButtonClear(props) {
  return (
    <div className='button-clear' onClick={props.handleClear}>
      {props.children}
    </div>
  );
}

export default ButtonClear;

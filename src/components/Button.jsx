import React from 'react';
import '../styles/Button.css';

function Button(props) {
  const operation = (value) => {
    return isNaN(value) && value !== '.' && value !== '=';
  };

  return (
    <div
      className={`button ${
        operation(props.children) ? 'operation' : ''
      }`.trimEnd()}
      onClick={() => props.handleClic(props.children)}
    >
      {props.children}
    </div>
  );
}

export default Button;

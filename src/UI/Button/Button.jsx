import React from 'react';
import './Button.scss';

const Button = ({ text, type, onClick, classbtn, condition }) => {
  return (
    <button
      className={`${classbtn} button`}
      onClick={onClick}
      type={type}
      disabled={condition}
    >
      {text}
    </button>
  );
};

export default Button;

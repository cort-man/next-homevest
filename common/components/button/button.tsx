import React from 'react';
import classes from 'styles/components/button.module.scss';

interface IButtonProps {
  text: string;
  className?: string;
}

const Button: React.FC<IButtonProps> = ({ text, className }) => (
  <button className={`${classes.button} ${className}`}>
    <div className={classes.text}>{text}</div>
  </button>
);

export default Button;

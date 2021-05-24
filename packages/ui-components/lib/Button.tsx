import React from 'react';

export type ButtonProps = {
  name: string;
};

const Button: React.FC<ButtonProps> = ({ name }) => {
  return <button>{name}</button>;
};

export default Button;

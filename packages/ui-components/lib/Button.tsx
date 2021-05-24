import React, { MouseEventHandler } from 'react';

export type ButtonProps = {
  name: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<ButtonProps> = ({ name, onClick }) => {
  return (
    <div>
      <button onClick={onClick}>{name}</button>
    </div>
  );
};

export default Button;

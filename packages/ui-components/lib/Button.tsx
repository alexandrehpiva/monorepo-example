import React from 'react';

export type ButtonProps = {
  name: string;
};

const Button: React.FC<ButtonProps> = ({ name }) => {
  return (
    <div>
      <button>{name}</button>
    </div>
  );
};

export default Button;

import React from 'react';
import './App.css';
import { roll } from '@monorepo/diceroll';
import { Button } from '@monorepo/ui-components';

function App() {
  console.log(roll('1d20'));

  return (
    <div className="App">
      <Button name="Teste" />
    </div>
  );
}

export default App;

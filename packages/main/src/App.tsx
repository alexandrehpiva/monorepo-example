import React from 'react';
import './App.css';
import { roll } from '@monorepo/diceroll';
import { Button } from '@monorepo/ui-components';

function App() {
  return (
    <div className="App">
      <Button name="Test Button" onClick={() => roll('1d20')} />
    </div>
  );
}

export default App;

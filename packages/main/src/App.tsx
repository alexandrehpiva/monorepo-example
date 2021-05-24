import React from 'react';
import './App.css';
import { concat } from '@monorepo/utils';
import { Button } from '@monorepo/ui-components';

function App() {
  return (
    <div className="App">
      <Button
        name="Test Button"
        onClick={() => {
          console.log(concat('Hello', ' World!'));
        }}
      />
    </div>
  );
}

export default App;

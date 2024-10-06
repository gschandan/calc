import React from 'react';
import TestComponent from './components/test.component';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>calc</h1>
        <TestComponent />
      </header>
    </div>
  );
};

export default App;
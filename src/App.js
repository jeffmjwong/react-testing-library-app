import React from 'react';
import './App.css';

const App = ({ example }) => {
  return (
    <div className="App">
      oh
      {
        example &&
          <p>Hello world!</p>
      }
    </div>
  );
}

export default App;

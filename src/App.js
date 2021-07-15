import React from 'react';
import './App.css';
// import HookForm from './components/HookForm'
import ConditionalRendering from './components/ConditonalRendering'
import HookForm from './components/HookForm';

function App() {
  return (
    <div className="App">
      <HookForm />
      <ConditionalRendering />
    </div>
  );
}

export default App;

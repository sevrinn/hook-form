import React from 'react';
import './App.css';
// import HookForm from './components/HookForm'
import Form from './components/ConditonalRendering'
import MovieForm from './components/HandlingValidations';
// import HookForm from './components/HookForm';

function App() {
  return (
    <div className="App">
      
      <Form />
      <MovieForm />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Card from "./components/Card"
import Comp2 from './components/Comp2';
import { DarkModeProvider} from './context/DarkModeContext';

function App() 
{
  return (
    <div className="App">
      <DarkModeProvider>
      <Card/>
      <Comp2/>
      </DarkModeProvider>
    </div>
  );
}

export default App;

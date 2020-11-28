import React, { useState } from 'react';
import './App.css';
import Screen from './components/screen/Screen';
import Keypad from './components/keypad/Keypad';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [scrVal, setScrVal] = useState('');

  return (
    <div className="main-app">
      <Screen scrVal={scrVal} setScrVal={setScrVal} />
      <Keypad scrVal={scrVal} setScrVal={setScrVal}/> 
    </div>
  );
}

export default App;

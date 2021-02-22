import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Button } from './button';
import { Input } from './Input';
import { GuessNumber } from "./GuessNumber";


ReactDOM.render(
  <React.StrictMode>
    {/* <App />
    <Button />
    <Input /> */}
    <GuessNumber />
  </React.StrictMode>,
  document.getElementById('root')
);

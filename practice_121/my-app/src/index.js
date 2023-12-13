import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const text = 'Hello World';



const elem = (
    <div>
        <h1 className='text'>Text: {text}</h1>
        <input type="text" />
        <label htmlFor=""></label>
        <button tabIndex = {0}>Click</button>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  elem
);


import React from 'react';
import { handleButtonClick } from './script.js';
import './index.css';

function Home() {
  return (
    
    <div className="contanier">
        <h1>Click on the button to get a quote</h1>
        <button className='clickButton' onClick={handleButtonClick}>Click me</button>
          <div className='quoteContainer'>
              <p className="quote"></p>
              <p className="author"></p>
          </div>
    </div>
  );
}

export default Home;




import React from 'react';
import './index.css';
import WorldCount from './components/WorldCount';
import IndiaCount from './components/IndiaCount';
import { TableData } from './components/TableData';
function App() {
  return (
    <div>
      <div className="header-cards">
        <div className="header-card1">
        <img height="45"
              src="https://www.gstatic.com/images/hpp/dothefive_90x90t.gif"
              width="45" data-iml="1584800317076" data-atf="1" alt="NoGIF">
        </img>
        </div>
        <div className="header-card">
          <h2 className="header">Worlds COVID-19 Analytics</h2>
        </div>
        <div className="header-card2">
        <img height="45"
              src="https://www.gstatic.com/images/hpp/dothefive_90x90t.gif"
              width="45" data-iml="1584800317076" data-atf="1" alt="NoGIF">
        </img>
        </div>
      </div>
      <div className="container">
        <div className="cards">
          <WorldCount/>
          <IndiaCount/>
        </div>
        <TableData/>
      </div>
    </div>
  );
}

export default App;

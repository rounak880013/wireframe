import React from "react";
import './App.css';
import './botton.css';
import './Right.css';
import './left.css';
import Top from './Top';
import Middle from './Middle';
import Bottom from './Bottom';
let App = () => {
  return(
    <div className='page'>
      <div className="Left_Menu"></div>
      <div>
        <Top/>
        <Middle/>
        <Bottom/>
      </div>
    </div>
  )
}
export default App;
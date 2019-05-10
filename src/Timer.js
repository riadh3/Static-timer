import React, { Component } from 'react';
import './Timer.css';


class Timer extends Component {
 
  render() { 
      return ( 
           <div >
                <span className="time"> 00:30:00 </span> <br />
                <div className="indicators">
                    <span className="indicat">Hour</span>
                    <span className="indicat minute">Minute</span>
                    <span className="indicat">Second</span>
                </div>

          </div>
       );
  }
}
export default Timer;

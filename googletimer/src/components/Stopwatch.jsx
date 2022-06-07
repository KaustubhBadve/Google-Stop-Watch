import React, { useRef,useEffect, useState } from "react";
import style from './stopwatch.module.css'
// function msToTime(duration) {
//   var milliseconds = Math.floor((duration % 1000) / 100),
//     seconds = Math.floor((duration / 1000) % 60),
//     minutes = Math.floor((duration / (1000 * 60)) % 60),
//     hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

//   hours = hours < 10 ? "0" + hours : hours;
//   minutes = minutes < 10 ? "0" + minutes : minutes;
//   seconds = seconds < 10 ? "0" + seconds : seconds;

//   return (
//     hours +
//     " Hrs :" +
//     minutes +
//     " Mins :" +
//     seconds +
//     " Sec :" +
//     milliseconds +
//     " Msec"
//   );
// }

const Stopwatch = ({timer,settimer,timerStopp}) => {
 
  const [btnflag, setbtnflag] = useState(false);

//   const [count, setCount] = useState(0);
//   const [sec, setSec] = useState(0);
//   const [min, setMin] = useState(0);
//   const [hr, setHr] = useState(0);


  // useEffect(() => {
    
    const Start = () => {
      if (!timerStopp.current) {
        timerStopp.current = setInterval(() => {
          settimer((timer) => timer + 1);
        }, 100);
        setbtnflag(true);
      }
  
      return () => {
        clearInterval(timerStopp.current);
        timerStopp.current = null;
      };
    };
   
  // }, [])
  
  

  const Pause = () => {
    clearInterval(timerStopp.current);
    timerStopp.current = null;
    setbtnflag(false);
  };

  const Reset = () => {
    clearInterval(timerStopp.current);
    settimer(0);
    timerStopp.current = null;
    setbtnflag(false);
  };

  
  return (
    <div>
      <div className={style.timer}>{timer}</div>
      <div className={style.btn}>
        {!btnflag ? (<button onClick={Start}>Start</button>) : (<button onClick={Pause}>Pause</button>)}
        <button onClick={Reset}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;

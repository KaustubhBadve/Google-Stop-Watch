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

const Stopwatch = () => {
  const [timer, settimer] = useState(0);
  const timerStop = useRef(null);
  const [btnflag, setbtnflag] = useState(false);

//   const [count, setCount] = useState(0);
//   const [sec, setSec] = useState(0);
//   const [min, setMin] = useState(0);
//   const [hr, setHr] = useState(0);


  useEffect(() => {
    
    const Start = () => {
      if (!timerStop.current) {
        timerStop.current = setInterval(() => {
          settimer((timer) => timer + 1);
        }, 100);
        setbtnflag(true);
      }
  
      return () => {
        clearInterval(timerStop.current);
        timerStop.current = null;
      };
    };
   
  }, [])
  
  

  const Pause = () => {
    clearInterval(timerStop.current);
    timerStop.current = null;
    setbtnflag(false);
  };

  const Reset = () => {
    clearInterval(timerStop.current);
    settimer(0);
    timerStop.current = null;
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

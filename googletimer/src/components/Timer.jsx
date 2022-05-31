import React, { useRef, useState } from 'react'
import style from './stopwatch.module.css'


const Timer = () => {
    const [watch, setwatch] = useState(5)
    const [value, setvalue] = useState(0)
    const [btnflagg, setbtnflagg] = useState(false)
    const timerStop = useRef(null);

    const handletimer=(e)=>{
      setwatch(Number(e.target.value))
      setvalue(Number(e.target.value))
    }



    const Start = () => {
        if (!timerStop.current) {
          timerStop.current = setInterval(() => {
            setwatch((watch) => watch - 1);
          }, 100);
          setbtnflagg(true);
        }
    
        // return () => {
        //   clearInterval(timerStop.current);
        //   timerStop.current = null;
        // };
      };
    


      const Pause = () => {
        clearInterval(timerStop.current);
        timerStop.current = null;
        setbtnflagg(false);
      };
    


      const Reset = () => {
        clearInterval(timerStop.current);
        setwatch(value)
        timerStop.current = null;
        setbtnflagg(false);
      };




  return (
    <div>
        <input type="number" onChange={handletimer} placeholder="Enter Timer time" />
         <div className={style.timer}>{watch}</div>
         <div className={style.btn}>
        {!btnflagg ? (<button onClick={Start}>Start</button>) : (<button onClick={Pause}>Pause</button>)}
        <button onClick={Reset}>Reset</button>
      </div>
    </div>
  )
}

export default Timer
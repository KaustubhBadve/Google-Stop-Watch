import React, {useState,useEffect } from 'react'
import style from './stopwatch.module.css'


const Timer = ({watch,setwatch,value,setvalue,timerStop,end,setend}) => {
  
    const [btnflagg, setbtnflagg] = useState(false)
   

    const handletimer=(e)=>{
      setwatch(Number(e.target.value))
      setvalue(Number(e.target.value))
    }

    const endtime=(e)=>{
    setend(e.target.value)
    }




    const Start = () => {
        if (!timerStop.current) {
        
            timerStop.current = setInterval(() => {

              setwatch((watch) =>{if(watch>end){
                setbtnflagg(true)
                return(watch-1)
                
              }
            else{
              clearInterval(timerStop.current);
              setwatch(watch)
              timerStop.current = null;
              setbtnflagg(false);
             return(watch)
             ;
            }});
            }, 100);
           
        }
    
        return () => {
          clearInterval(timerStop.current);
          timerStop.current = null;
        };
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
        <input className={style.ip1} type="number" onChange={handletimer} placeholder="Enter Timer time" />
        <input className={style.ip2} type="number" onChange={endtime} placeholder="Enter Ending Time" />
         <div className={style.timer}>{watch}</div>
         <div className={style.btn}>
        {!btnflagg ? (<button onClick={Start}>Start</button>) : (<button onClick={Pause}>Pause</button>)}
        <button onClick={Reset}>Reset</button>
      </div>
    </div>
  )
}

export default Timer
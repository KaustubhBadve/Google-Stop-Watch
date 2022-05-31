import { useState } from 'react';
import './App.css';
import Stopwatch from './components/Stopwatch';
import Timer from './components/Timer';



function App() {
  const [flag, setflag] = useState(true)
  return (
    <div className="App">
      <div className='main'>
     <div className='timerstopdiv'>
     <div onClick={()=>setflag(true)}>Timer</div> 
     <div onClick={()=>setflag(false)}>StopWatch</div>
     </div>
     <div className='name'>{flag ? <Timer/> : <Stopwatch/>}</div>
     </div>
     
     
    </div>
  );
}

export default App;

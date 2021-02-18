import { useState, useEffect } from "react";
function App() {
  const [time, setTime] = useState('0');
  const [timeOn, setTimeOn] = useState(false);

  useEffect(()=>{
    let interval = null;
    
    if(timeOn){
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10)
      }, 10)
    }else{
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [timeOn])


  return (
    <div className='App'>
      <div >
        <span>{('0' + Math.floor((time % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))))}:</span>
        <span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}</span>
      </div>
      <div className='app_style'>
        {!timeOn && time === 0 && (
          <button onClick={() => setTimeOn(true)}>Start</button>
        )}
        {timeOn && (
          <button onClick={() => setTimeOn(false)}>Stop</button>
        )}
        {!timeOn && time !== 0 && (
          <button onClick={() => setTimeOn(true)}>Wait</button>
        )}
        {!timeOn && time > 0 && (
          <button onClick={() => setTime(0)}>Reset</button>
        )}
      </div>
    </div>
    
  );
}

export default App;

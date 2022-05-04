import useTimer from "./customhook/useTimer";
import "./timer.css";

function App() {
  const {isRunning, start, stop, second} = useTimer(5)
  return (
    <div className="wrapper">
     <h1>{isRunning?second:'No time running'}</h1> 
     <h1>Status : {isRunning?'true':'false'}</h1> 
     <div className="btn-wrapper">
       <div><button className="btn-success" disabled={isRunning} onClick={start}>Start</button></div>
       <div><button className="btn-danger" disabled={!isRunning}  onClick={stop}>Stop</button></div>
     </div>
    </div>
  );
}

export default App;

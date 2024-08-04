import React from "react";
import { useEffect, useState } from "react";

function Stopwatch() {
    const [ timer, setTimer ] = useState(0);
    const [ isRunning, setIsrunning ] = useState(false);
    const formatTime = (seconds) => {
       const minutes = Math.floor(seconds / 60 ); 
       const secs = seconds % 60;
       return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
    };
    useEffect(() => {
        let interval;
        if(isRunning) {
            interval=setInterval(() => {
                setTimer((prev) => prev+1);
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return (() => {
            clearInterval(interval);
        })
    }, [isRunning]);

return(
    <>
    <h1>Stopwatch</h1>
    <h3>Time : {formatTime(timer)}</h3>
    <button onClick={() => {
        setIsrunning((prev) => !prev);
    }}>{isRunning? "stop" : "start"}</button>
    <button onClick={() => {
        setTimer(0);
        setIsrunning(false);
    }}>Reset</button>
    </>
);
};

export default Stopwatch;
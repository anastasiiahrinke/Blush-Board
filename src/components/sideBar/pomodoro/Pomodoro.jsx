import React, { useState, useEffect } from 'react';
import './pomodoro.css';

const Pomodoro = () => {
    const [time, setTime] = useState(25 * 60); 
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let timer = null;
        
        if (isActive && time > 0) {
            timer = setInterval(() => {
                setTime(time - 1);
            }, 1000);
        } else if (time === 0) {
            setIsActive(false);
            alert("Pomodoro completed! Time for a break! 🍅");
        }

        return () => clearInterval(timer);
    }, [isActive, time]);

    const startTimer = () => {
        setIsActive(true);
    };

    const pauseTimer = () => {
        setIsActive(false);
    };

    const resetTimer = () => {
        setIsActive(false);
        setTime(25 * 60);
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div className="pomodoro">
            <h3>Pomodoro Timer</h3>
            <div className="timer-display">
                {formatTime(time)}
            </div>
            <div className="timer-buttons">
                {!isActive ? (
                    <button onClick={startTimer} className="start-btn">
                        Start
                    </button>
                ) : (
                    <button onClick={pauseTimer} className="pause-btn">
                        Pause
                    </button>
                )}
                <button onClick={resetTimer} className="reset-btn">
                    Reset
                </button>
            </div>
        </div>
    );
};

export default Pomodoro;
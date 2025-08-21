import './progressBar.css';
import { useState } from "react";

const ProgressBar = ({days}) => {
    const basicProgressBar = ({currentValue, maxValue}) => {
        const percent = maxValue > 0 ? Math.round((currentValue / maxValue) * 100) : 0;

        return (
            <div className='progress-container'>
                <progress value={currentValue} max = {maxValue}></progress>
                    <span className="progress-label">{percent}%</span>
            </div>
        )

    }
    return (
        <div className="progress-bar">
            {days.map((day, index) => {
                const total = day.plans.length;
                const completed = day.plans.filter(plan => plan.completed).length;

                return (
                    <div key={index} className="day-progress">
                        <span>{day.day}</span>
                        {basicProgressBar({currentValue: completed, maxValue: total})}
                    </div>
                )
            })}
        </div>
    );
};

export default ProgressBar;

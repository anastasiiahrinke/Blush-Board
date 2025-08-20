import card from '../../../assets/img/card.svg';
import './planner.css';
import {useState} from 'react';

const daysOfWeek = [
  {day: 'Monday', plans: []},
  {day: 'Tuesday', plans: []},
  {day: 'Wednesday', plans: []},
  {day: 'Thursday', plans: []},
  {day: 'Friday', plans: []},
  {day: 'Saturday', plans: []},
  {day: 'Sunday', plans: []}
];

const Planner = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [days, setDays] = useState(daysOfWeek);
  const [newTask, setNewTask] = useState("")

  const handleCardClick = (index) => {
    setActiveIndex(index);
    setNewTask("");
  }

  const handleClose = () => {
    setActiveIndex(null);
    setNewTask("");
  }

  const handleTaskChange = (e) => {
    setNewTask(e.target.value);
  }

  const handleSave = () => {
    const text = newTask.trim();
    if(!text || activeIndex === null) return;
  }

    return (
    <>
      <div className="planner">
        {daysOfWeek.map((days, index) => (
          <div className="planner-card" key={index} onClick={() => handleCardClick(index)}>
            <img src={card} alt={`${days.day} card`} />
            <span className="day-label">{days.day}</span>
          </div>
        ))}
      </div>
      {activeIndex !== null && (
        <div className="planner-overlay" onClick={handleClose}>
          <div className="planner-card planner-card--active" onClick={e => e.stopPropagation()}>
            <img src={card} alt={`${daysOfWeek[activeIndex].day} card`} />
            <input type="text" 
                    placeholder="Add your plan..."  
            <span className="day-label">{daysOfWeek[activeIndex].day}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Planner;

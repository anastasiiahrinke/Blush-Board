import card from '../../../assets/img/card.svg';
import './planner.css';
import { useState } from 'react';

const daysOfWeek = [
  { day: 'Monday', plans: [] },
  { day: 'Tuesday', plans: [] },
  { day: 'Wednesday', plans: [] },
  { day: 'Thursday', plans: [] },
  { day: 'Friday', plans: [] },
  { day: 'Saturday', plans: [] },
  { day: 'Sunday', plans: [] }
];

const Planner = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [days, setDays] = useState(daysOfWeek);
  const [newTask, setNewTask] = useState("");

  const handleCardClick = (index) => {
    setActiveIndex(index);
    setNewTask("");
  };

  const handleClose = () => {
    setActiveIndex(null);
    setNewTask("");
  };

  const handleTaskChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleSave = () => {
    const text = newTask.trim();
    if (!text || activeIndex === null) return;

    setDays(prev =>
      prev.map((d, i) =>
        i === activeIndex
          ? { ...d, plans: [...d.plans, { text, completed: false }] }
          : d
      )
    );

    setNewTask("");
  };

  const handleDone = (dayIndex, taskIndex) => {
    setDays(prev =>
      prev.map((d, i) =>
        i === dayIndex
          ? {
              ...d,
              plans: d.plans.map((t, ti) =>
                ti === taskIndex ? { ...t, completed: !t.completed } : t
              ),
            }
          : d
      )
    );
  };

  return (
    <>
      <div className="planner">
        {days.map((d, index) => (
          <div
            className="planner-card"
            key={index}
            onClick={() => handleCardClick(index)}
          >
            <img src={card} alt={`${d.day} card`} />
            <span className="day-label">{d.day}</span>

            {d.plans.length > 0 && (
              <ul className="task-list">
                {d.plans.map((t, ti) => (
                  <li key={ti} className="task-item">
                    <span className={t.completed ? "completed-task" : ""}>
                      {t.text}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {activeIndex !== null && (
        <div className="planner-overlay" onClick={handleClose}>
          <div
            className="planner-card planner-card--active"
            onClick={e => e.stopPropagation()}
          >
            <img src={card} alt={`${days[activeIndex].day} card`} />

            {days[activeIndex].plans.length > 0 && (
              <ul className="task-list task-list--in-overlay">
                {days[activeIndex].plans.map((t, ti) => (
                  <li key={ti} className="task-item"               checked={t.completed}
              onClick={() => handleDone(activeIndex, ti)}>
                    <span className={t.completed ? "completed-task" : ""}>
                      {t.text}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            <input
              type="text"
              placeholder="Add your plan..."
              value={newTask}
              onChange={handleTaskChange}
              onKeyDown={(e) => { if (e.key === 'Enter') handleSave() }}
              autoFocus

            />

            <div className="overlay-actions">
              <button
                className="btn btn-primary"
                onClick={handleSave}
                disabled={!newTask.trim()}
              >
                Save
              </button>
              <button className="btn btn-ghost" onClick={handleClose}>
                Close
              </button>
            </div>

            <span className="day-label">{days[activeIndex].day}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Planner;

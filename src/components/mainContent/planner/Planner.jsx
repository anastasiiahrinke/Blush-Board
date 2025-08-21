import card from "../../../assets/img/card.svg";
import "./planner.css";
import { useState } from "react";

const Planner = ({ days, setDays }) => {
  const [activeIndex, setActiveIndex] = useState(null);
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

    setDays((prev) =>
      prev.map((d, i) =>
        i === activeIndex
          ? { ...d, plans: [...d.plans, { text, completed: false }] }
          : d
      )
    );

    setNewTask("");
  };

  const handleDone = (dayIndex, taskIndex) => {
    setDays((prev) =>
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

  const handleDelete = (dayIndex, taskIndex) => {
    setDays((prev) =>
      prev.map((d, i) =>
        i === dayIndex
          ? {
              ...d,
              plans: d.plans.filter((_, ti) => ti !== taskIndex),
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
            onClick={(e) => e.stopPropagation()}
          >
            <img src={card} alt={`${days[activeIndex].day} card`} />

            {days[activeIndex].plans.length > 0 && (
              <ul className="task-list task-list--in-overlay">
                {days[activeIndex].plans.map((t, ti) => (
                  <li
                    key={ti}
                    className="task-item"
                    checked={t.completed}
                    onClick={() => handleDone(activeIndex, ti)}
                  >
                    <span className={t.completed ? "completed-task" : ""}>
                      {t.text}
                      <button onClick={() => handleDelete(activeIndex, ti)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path
                            d="M9 3v1H4v2h16V4h-5V3h-6zm1 6v9h2V9h-2zm4 
                                0v9h2V9h-2zM5 7v14c0 1.1.9 2 2 
                                  2h10c1.1 0 2-.9 2-2V7H5z"
                          />
                        </svg>
                      </button>
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
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSave();
              }}
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

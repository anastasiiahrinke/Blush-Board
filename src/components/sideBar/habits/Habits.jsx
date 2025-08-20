import './habits.css';
import { useState } from "react";

const Habits = () => {
    const [todoItems, setTodoItems] = useState([]);
    const [task, setTask] = useState("");

    const handleDone = (item) => {
        const modifiedTodo = todoItems.filter((t) => t.desc !== item.desc);
        const modifiedItem = {
            desc: item.desc,
            status: "done"
        };
        setTodoItems([...modifiedTodo, modifiedItem]);
    };

    const handleDelete = (item) => {
        const modifiedTodo = todoItems.filter((t) => t.desc !== item.desc);
        setTodoItems(modifiedTodo);
    };

    const handleAdd = () => {
        if (task.trim() === "") return; 
        setTodoItems([...todoItems, { desc: task, status: "draft" }]);
        setTask("");
    };

    return (
        <div className="todo">
            <h2>To-do today</h2>
            <p>Track your daily habits and progress.</p>

            <div className="todo-input-container">
                <input 
                    type="text" 
                    placeholder="Add new to-do..." 
                    className="add-task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    onKeyDown={(e) => { if (e.key === "Enter") handleAdd(); }}
                />
                <button className="add-todo-btn" onClick={handleAdd}>+</button>
            </div>

            <div className="list-container">
                <div className="items">
                    {todoItems.map((item, index) => (
                        <div key={index} className={`item ${item.status === "done" ? "done" : ""}`}>
                            <span className="item-desc">{item.desc}</span>
                            <span>
                                {item.status !== "done" && (
                                    <button className="done-btn" onClick={() => handleDone(item)}>
                                        Done
                                    </button>
                                )}
                                <button className="delete-btn" onClick={() => handleDelete(item)}>
                                    Delete
                                </button>
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Habits;

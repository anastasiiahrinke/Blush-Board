import './sidebar.css';
import Pomodoro from './pomodoro/Pomodoro';
import Habits from './habits/Habits';

const SideBar = () => {
    return (
        <>
            <aside className="sidebar"> 
            <Pomodoro />
            <Habits />
            </aside>
        </>
    )
}

export default SideBar;
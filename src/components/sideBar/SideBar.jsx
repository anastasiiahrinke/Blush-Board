import './sidebar.css';
import Pomodoro from './pomodoro/Pomodoro';
import ProgressBar from './habits/ProgressBar';

const SideBar = ({days, setDays}) => {
    return (
        <>
            <aside className="sidebar"> 
            <Pomodoro />
            <ProgressBar days={days} setDays={setDays} />
            </aside>
        </>
    )
}

export default SideBar;
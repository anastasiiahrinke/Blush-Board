import Planner from '../mainContent/planner/Planner';
import './mainSide.css';

const MainSide = ({ days, setDays }) => {
    return (
        <div className="main-content">
            <h1>Plan your day!</h1>
            <Planner days={days} setDays={setDays} />
        </div>
    );
}

export default MainSide;
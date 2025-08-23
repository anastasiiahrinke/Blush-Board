import Planner from '../mainContent/planner/Planner';
import './mainSide.css';

const MainSide = ({ days, setDays }) => {
    const today = new Date();

  const formattedDate = today.toLocaleDateString("en-US",{
    day: "numeric", 
    month: "long", 
    year: "numeric",  
  });

  const dateDay = today.toLocaleDateString('en-US', {
    weekday: "long"
  })

    return (
        <div className="main-content">
            <h1>{formattedDate}</h1>
            <h2>{dateDay}</h2>
            <Planner days={days} setDays={setDays} />
        </div>
    );
}

export default MainSide;
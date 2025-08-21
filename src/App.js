import Header from './components/headerSection/Header';
import SideBar from './components/sideBar/SideBar';
import MainSide from './components/mainContent/MainSide';
import { useState } from 'react';
import './App.css';

function App() {
  const initialDays = [
  { day: 'Monday', plans: [] },
  { day: 'Tuesday', plans: [] },
  { day: 'Wednesday', plans: [] },
  { day: 'Thursday', plans: [] },
  { day: 'Friday', plans: [] },
  { day: 'Saturday', plans: [] },
  { day: 'Sunday', plans: [] }
];

  const [days, setDays] = useState(initialDays);
  return (
    <>
      <Header />
      <SideBar days={days} setDays={setDays} />
      <MainSide days={days} setDays={setDays} />
    </>
  );
}

export default App;


import { useState, useContext, useEffect } from "react";

import { getMonth } from "./util";

import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Month from "./Components/Month/Month";

import GlobalContext from "./context/GlobalContext";

import './App.scss'
import ReminderModal from "./Components/ReminderModal/ReminderModal";

function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showReminderModal } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <>
      {showReminderModal && <ReminderModal />}
      <div className="screen">
        <Header />
        <div className="screen-sidebar">
          <Sidebar />
          <Month month={currentMonth}/>
        </div>
      </div>
    </>
  );
}

export default App

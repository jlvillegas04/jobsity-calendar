import { useState } from "react";

import { getMonth } from "./util";

import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Month from "./Components/Month/Month";

import './App.scss'

function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  return (
    <>
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

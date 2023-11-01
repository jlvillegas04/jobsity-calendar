import { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";

import CreateReminderButton from "../ReminderButton/CreateReminderButton"

import { BsFillCalendarEventFill } from "react-icons/bs";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import dayjs from "dayjs";

import "./Header.scss";

export default function Header() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);

  function handlePreviousMonth() {
    setMonthIndex(monthIndex - 1);
  }

  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }

  function handleReset() {
    setMonthIndex(dayjs().month());
  }

  return (
    <header className="header">
      <BsFillCalendarEventFill className="header-logo"/>
      <h1 className="header-name">Jobsity Calendar</h1>
      <button onClick={handleReset} className="header-today-btn">
        Today
      </button>
      <button className="chevron-btn" onClick={handlePreviousMonth}>
        <AiOutlineLeft />
      </button>
      <button className="chevron-btn" onClick={handleNextMonth}>
        <AiOutlineRight />
      </button>
      <h2 className="month-year-text">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>

      <CreateReminderButton />
    </header>
  )
}

import "./Header.scss";

import { BsFillCalendarEventFill } from "react-icons/bs";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";


export default function Header() {
  return (
    <header className="header">
      <BsFillCalendarEventFill className="header-logo"/>
      <h1 className="header-name">Jobsity Calendar</h1>
      <button className="header-today-btn">
        Today
      </button>
      <button className="chevron-btn">
        <AiOutlineLeft />
      </button>
      <button className="chevron-btn">
        <AiOutlineRight />
      </button>
    </header>
  )
}

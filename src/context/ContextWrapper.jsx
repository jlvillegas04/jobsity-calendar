/* eslint-disable react/prop-types */
import { useState } from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";

export default function ContextWrapper(props) {

  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [daySelected, setDaySelected] = useState(null);
  const [showReminderModal, setShowReminderModal] = useState(false);
  
  return (
    <GlobalContext.Provider value={{ 
      monthIndex, 
      setMonthIndex,
      daySelected,
      setDaySelected,
      showReminderModal,
      setShowReminderModal,
      
      }}>
        {props.children}
    </GlobalContext.Provider>
  )
}

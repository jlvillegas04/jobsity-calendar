/* eslint-disable react/prop-types */
import { useEffect, useReducer, useState } from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";

function savedRemindersReducer(state, {type, payload}) {
  switch (type) {
    case 'push':
      return [...state, payload];

    case 'update':
      return state.map((event) => event.id === payload.id ? payload : event)

    case 'delete':
      return state.filter((event) => event.id !== payload.id)
  
    default:
      throw new Error();
  }
}

function initReminders() {
  const storageReminders = localStorage.getItem('savedReminders');
  const parsedReminders = storageReminders ? JSON.parse(storageReminders) : [];
  return parsedReminders;
}

export default function ContextWrapper(props) {

  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [daySelected, setDaySelected] = useState(dayjs());
  const [showReminderModal, setShowReminderModal] = useState(false);
  const [selectedReminder, setSelectedReminder] = useState(null);
  const [savedReminders, dispatchReminder] = useReducer(savedRemindersReducer, [], initReminders);
  
  useEffect(() => {
    localStorage.setItem('savedReminders', JSON.stringify(savedReminders));
  }, [savedReminders]);

  useEffect(() => {
    if(!showReminderModal) {
      setSelectedReminder(null);
    }
  }, [showReminderModal]);
  
  return (
    <GlobalContext.Provider value={{ 
      monthIndex, 
      setMonthIndex,
      daySelected,
      setDaySelected,
      showReminderModal,
      setShowReminderModal,
      dispatchReminder,
      savedReminders,
      selectedReminder,
      setSelectedReminder
      }}>
        {props.children}
    </GlobalContext.Provider>
  )
}

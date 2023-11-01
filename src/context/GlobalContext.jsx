/* eslint-disable no-unused-vars */
import React from 'react';

const GlobalContext = React.createContext({
    monthIndex: 0,
    setMonthIndex: (idx) => {},
    daySelected: null,
    setDaySelected: (day) => {},
    showReminderModal: false,
    setShowReminderModal: () => {},
    dispatchReminder: ({type, payload}) => {},
    savedReminders: [],
    selectedReminder: null,
    setSelectedReminder: () => {},
});

export default GlobalContext;
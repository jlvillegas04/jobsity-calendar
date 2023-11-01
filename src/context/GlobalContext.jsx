import React from 'react';

const GlobalContext = React.createContext({
    monthIndex: 0,
    setMonthIndex: (idx) => {},
    daySelected: null,
    setDaySelected: (day) => {},
    showReminderModal: false,
    setShowReminderModal: () => {},
});

export default GlobalContext;
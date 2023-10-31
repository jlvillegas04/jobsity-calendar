import React from 'react';

const GlobalContext = React.createContext({
    monthIndex: 0,
    setMonthIndex: (idx) => {}
});

export default GlobalContext;
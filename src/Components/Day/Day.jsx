/* eslint-disable react/prop-types */
import dayjs from 'dayjs'
import './Day.scss'
import { useContext, useEffect, useState } from 'react';
import GlobalContext from '../../context/GlobalContext';

export default function Day({ day, rowIdx }) { 
  const [dayReminders, setDayReminders] = useState([]);
  const {
    setDaySelected, 
    setShowReminderModal, 
    savedReminders, 
    setSelectedReminder,
  } = useContext(GlobalContext);

  useEffect(()=> {
    const reminders = savedReminders.filter((event) => dayjs(event.day).format("DD-MM-YY") === day.format("DD-MM-YY"));
    setDayReminders(reminders);
  }, [savedReminders, day]);

  
  function getCurDay() {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY") ? "current-day" : "";
  }
  return (
    <div className='days'>
      <header className="days-header">
        {rowIdx === 0 && (
          <p className="days-text-small">{day.format('ddd').toUpperCase()}</p>
        )}
        <p className={`days-text ${getCurDay()}`}>
          {day.format('DD')}
        </p>
      </header>
      <div className='day-each' onClick={() => {
        setDaySelected(day);
        setShowReminderModal(true);
      }}>
          {dayReminders.map((event, idx) => (
            <div 
              key={idx}
              onClick={() => setSelectedReminder(event)}
              className="singular-event"
              style={{ backgroundColor: `${event.color}` }}
            >
              {event.title}
            </div>
          ))}
      </div>
    </div>
  )
}

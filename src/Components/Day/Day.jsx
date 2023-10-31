/* eslint-disable react/prop-types */
import dayjs from 'dayjs'
import './Day.scss'

export default function Day({ day, rowIdx }) {
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
    </div>
  )
}

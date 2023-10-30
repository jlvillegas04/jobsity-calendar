/* eslint-disable react/prop-types */
import './Day.scss'

export default function Day({ day, rowIdx }) {
  return (
    <div className='days'>
      <header className="days-header">
        {rowIdx === 0 && (
          <p className="days-text-small">{day.format('ddd').toUpperCase()}</p>
        )}
        <p className="days-text">
          {day.format('DD')}
        </p>
      </header>
    </div>
  )
}

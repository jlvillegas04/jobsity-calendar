import { useContext, useState } from "react";

import { AiOutlineClose } from "react-icons/ai"
import { BsFillCalendarEventFill, BsFillTrashFill } from "react-icons/bs";

import GlobalContext from "../../context/GlobalContext";

import "./ReminderModal.scss"
import WeatherForecast from "../WeatherForecast/Forecast";

const colors = ["#FF5733", "#33FF57", "#337AFF", "#FF33F9", "#FFD700"];

export default function ReminderModal() {
    const {
        setShowReminderModal, 
        daySelected, 
        dispatchReminder,
        selectedReminder,
    } = useContext(GlobalContext);

    const [title, setTitle] = useState(selectedReminder ? selectedReminder.title : "");
    const [description, setDescription] = useState(selectedReminder ? selectedReminder.description : "");
    const [selectedColor, setSelectedColor] = useState(selectedReminder 
        ? colors.find((color) => color === selectedReminder.color) : colors[0]
    );
    const [selectedTime, setSelectedTime] = useState(
        selectedReminder ? selectedReminder.time : "08:00 AM"
    );

    


    const handleColorSelect = (color) => {
        setSelectedColor(color);
    };

    function handleSubmit(e) {
        e.preventDefault();
        const calendarReminder = {
            title, 
            description,
            color: selectedColor,
            day: daySelected.valueOf(),
            time: selectedTime,
            id: selectedReminder ? selectedReminder.id : Date.now(),
        };
        if (selectedReminder) {
            dispatchReminder({ type: 'update', payload: calendarReminder });
        } else {
            dispatchReminder({ type: 'push', payload: calendarReminder });
        }
        
        setShowReminderModal(false);
    }

  return (
    <div className="screen-modal">
        <form className="modal-form">
            <header className="form-header">
                <BsFillCalendarEventFill className="form-calendar"/>

                <div>
                    {selectedReminder && (
                        <span
                            onClick={() => {
                                dispatchReminder({
                                    type: "delete",
                                    payload: selectedReminder,
                                });
                                setShowReminderModal(false);
                            }}
                            className="form-delete" 
                        >
                            <BsFillTrashFill />
                        </span>
                    )}
                </div>

                <button className="form-close" onClick={() => setShowReminderModal(false)}>
                    <AiOutlineClose />
                </button>
            </header>
            <div className="form-body">
                <div className="body-grid">
                    <p className="form-date">{daySelected.format("dddd, MMMM DD")}</p>
                    <input
                        className="form-time"
                        type="time"
                        name="time"
                        value={selectedTime}
                        onChange={(e) => setSelectedTime(e.target.value)}
                    />
                    <input
                        className="form-title" 
                        type="text"
                         name="title" 
                         placeholder="Add title" 
                         value={title} 
                         onChange={(e) => setTitle(e.target.value)} 
                         required
                    />
                    <input
                        className="form-description" 
                        type="text"
                         name="description" 
                         placeholder="Add a description" 
                         value={description} 
                         onChange={(e) => setDescription(e.target.value)} 
                         required
                    />
                    <WeatherForecast 
                        key={selectedReminder ? selectedReminder.id : Date.now()}
                        reminderKey={selectedReminder ? selectedReminder.id : Date.now()}
                    />
                    <div className="color-picker">
                        <p>Choose a color:</p>
                        <div className="color-buttons">
                            {colors.map((color, index) => (
                            <button
                                key={index}
                                className={`color-button ${selectedColor === color ? 'selected' : ''}`}
                                style={{ backgroundColor: color }}
                                onClick={() => handleColorSelect(color)}
                                type="button"
                            />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <footer className="form-footer">
                <button className="save-btn" onClick={handleSubmit}>
                    Save
                </button>               
            </footer>
        </form>
    </div>
  );
}

import { useContext, useState } from "react";

import { AiOutlineClose } from "react-icons/ai"
import { BsFillCalendarEventFill } from "react-icons/bs";

import GlobalContext from "../../context/GlobalContext";

import "./ReminderModal.scss"

export default function ReminderModal() {

    const [title, setTitle] = useState('');

    const {setShowReminderModal} = useContext(GlobalContext);

  return (
    <div className="screen-modal">
        <form className="modal-form">
            <header className="form-header">
                <BsFillCalendarEventFill className="form-calendar"/>

                <button className="form-close" onClick={() => setShowReminderModal(false)}>
                    <AiOutlineClose />
                </button>
            </header>
            <div className="form-body">
                <div className="body-grid">
                    <input
                        className="form-title" 
                        type="text"
                         name="title" 
                         placeholder="Add title" 
                         value={title} 
                         onChange={(e) => setTitle(e.target.value)} 
                         required
                    />
                </div>
            </div>
        </form>
    </div>
  );
}

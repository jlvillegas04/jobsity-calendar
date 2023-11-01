import { useContext } from "react"
import GlobalContext from "../../context/GlobalContext"

import { AiOutlinePlusCircle } from "react-icons/ai"

import "./CreateReminderButton.scss"

export default function CreateReminderButton() {
    const { setShowReminderModal } = useContext(GlobalContext);

    return (
        <button
            onClick={() => setShowReminderModal(true)}
            className="create-reminder-btn"
        >
            <AiOutlinePlusCircle className="reminder-plus"/>
            <span className="reminder-text">New Reminder</span>
        </button>
    )
}
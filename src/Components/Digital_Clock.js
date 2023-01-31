import React from "react";
import '../Style/styleClock.css'

const DigitalClock = (props) => {
    const { digitalTime } = props

    return (
        <div className="clock-container">
            <div className="digital-clock">
                {digitalTime.toLocaleTimeString()}
            </div>
        </div>
    )
}

export default DigitalClock
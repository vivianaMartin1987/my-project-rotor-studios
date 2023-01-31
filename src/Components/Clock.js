import React, { useState, useEffect } from "react";

import '../Style/styleClock.css'
import AnalogicClock from "./Analogic_Clock";
import DigitalClock from "./Digital_Clock";

const Clock = () => {
    const [onTime, setOnTime] = useState(new Date())

    useEffect(() => {
        setInterval(() => {
            const date = new Date()
            setOnTime(date)
        }, 1000);
    }, [])

    return (
        <div className="container">

            <AnalogicClock analogicTime={onTime} />
            <DigitalClock digitalTime={onTime} />

        </div>
    )
}

export default Clock
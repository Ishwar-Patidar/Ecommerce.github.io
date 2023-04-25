import React, { useEffect, useState } from "react";

function Summary() {
    const date = new Date();
    date.setHours(23);
    date.setMinutes(59);
    date.setSeconds(10);

    const [hour, setHour] = useState(date.getHours());
    const [minute, setMinute] = useState(date.getMinutes());
    const [second, setSecond] = useState(date.getSeconds());



    useEffect(() => {
        setTimeout(() => {
            setSecond((second) => second - 1);
        }, 1000);
    });
    if(second == 0){
        setSecond(59);
        setMinute(minute-1);
    }
    if(minute == 0){
        setMinute(59);
        setHour(hour-1);
    }

    return (
        <>
            <div>
            {(hour + ":" + minute + ":" +second)}
            </div>
        </>
    )
}
export default Summary;
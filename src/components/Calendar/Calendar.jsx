import { useState } from "react";
import "./Calendar.css";

function Calendar() {

    const [currentDate, setCurrentDate] = useState(new Date());

    const month = currentDate.toLocaleDateString("default", {
        month: "long"
    });

    const year = currentDate.getFullYear();

    const previousMonth = () => {
        setCurrentDate(
            new Date(year, currentDate.getMonth() - 1, 1)
        );
    };

    const nextMonth = () => {
        setCurrentDate(
            new Date(year, currentDate.getMonth() + 1, 1)
        );
    };

    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    // First day of current month
    const firstDay = new Date(
        year,
        currentDate.getMonth(),
        1
    ).getDay();

    // Total days in current month
    const totalDays = new Date(
        year,
        currentDate.getMonth() + 1,
        0
    ).getDate();

    const dates = Array.from(
        { length: totalDays },
        (_, index) => index + 1
    );

    const holidays = [
        {
            date: 2,
            type: "holiday"
        },
        {
            date: 15,
            type: "holiday"
        },
        {
            date: 26,
            type: "holiday"
        }
    ];

    return (
        <section className="calendar">

            <h2>Calendar</h2>

            <div className="calendar-header">

                <button onClick={previousMonth}>
                    ←
                </button>

                <h2>
                    {month} {year}
                </h2>

                <button onClick={nextMonth}>
                    →
                </button>

            </div>

            <div className="calendar-days">

                {days.map((day) => (
                    <div key={day}>
                        {day}
                    </div>
                ))}

            </div>

            <div className="calendar-dates">

                {/* Empty boxes before first date */}
                {Array.from({ length: firstDay }).map((_, index) => (
                    <div key={`empty-${index}`}></div>
                ))}

                {/* Dates */}
                {dates.map((date) => {

                    // Check holiday
                    const holiday = holidays.find(
                        (item) => item.date === date
                    );

                    // Find day of week
                    const dayIndex =
                        (firstDay + date - 1) % 7;

                    // Saturday or Sunday
                    const isWeekend =
                        dayIndex === 0 || dayIndex === 6;

                    return (
                        <div
                            key={date}
                            className={
                                holiday
                                    ? "holiday"
                                    : isWeekend
                                    ? "weekend"
                                    : ""
                            }
                        >
                            {date}
                        </div>
                    );

                })}

            </div>

        </section>
    );
}

export default Calendar;
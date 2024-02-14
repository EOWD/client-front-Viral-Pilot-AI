import React, { useContext, useEffect } from "react";
import { Calendar as RSuiteCalendar, Whisper, Popover, Badge } from "rsuite";
import { UserDataContext } from "../../../context/UserDataContext";
import "./Calendar.css";

function CalendarComponent() {
  const { calendars, refreshData } = useContext(UserDataContext);
  useEffect(() => {
    refreshData();
  }, []);
  function getTodoList(date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // JavaScript months are 0-indexed
    const day = date.getDate();
    const dateString = `${year}-${month.toString().padStart(2, "0")}-${day
      .toString()
      .padStart(2, "0")}`;
  
    return calendars
      .filter((entry) => {
        // Extract the date part from the entry's date and compare it to the current date string
        const entryDate = entry.date.split("T")[0];
        return entryDate === dateString;
      })
      .map((entry) => {
        if (entry.time) {
          return { time: entry.time.slice(0, 5), title: entry.entry };
        }
        return { time: "", title: entry.entry };
      })
      .sort((a, b) => {
        // Sort by time from early to late. Entries with "N/A" will be sorted to the end.
        if (a.time === "") return 1;
        if (b.time === "") return -1;
        return a.time.localeCompare(b.time);
      });
  }

  function renderCell(date) {
    const list = getTodoList(date);
    const displayList = list.filter((item, index) => index < 2);

    if (list.length) {
      const moreCount = list.length - displayList.length;
      const moreItem = (
        <li>
          <Whisper
            placement="top"
            trigger="click"
            speaker={
              <Popover>
                {list.map((item, index) => (
                  <p key={index}>
                    <b>{item.time}</b> - {item.title}
                  </p>
                ))}
              </Popover>
            }
          >
            <a>{moreCount} more</a>
          </Whisper>
        </li>
      );

      return (
        <ul className="calendar-todo-list">
          {displayList.map((item, index) => (
            <li key={index}>
              <Badge /> {item.time && `${item.time} -`} {item.title}
            </li>
          ))}
          {moreCount ? moreItem : null}
        </ul>
      );
    }

    return null;
  }

  return (
    <div className="calendarContainer" style={{margin: "10px 40px"}}>
      <h1>CALENDAR</h1>
      <RSuiteCalendar bordered renderCell={renderCell} />
    </div>
  );
}

export default CalendarComponent;

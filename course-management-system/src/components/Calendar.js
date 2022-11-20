import React, {Component} from 'react';
import {DayPilot, DayPilotCalendar, DayPilotNavigator} from "@daypilot/daypilot-lite-react";
import "./CalendarStyles.css";

const styles = {
  wrap: {
    display: "flex"
  },
  left: {
    marginRight: "10px"
  },
  main: {
    flexGrow: "1"
  }
};

class Calendar extends Component {

  constructor(props) {
    super(props);
    this.calendarRef = React.createRef();
    this.state = {
      viewType: "Week",
      durationBarVisible: false,
      timeRangeSelectedHandling: "Enabled",
      onTimeRangeSelected: async args => {
        const dp = this.calendar;
        const modal = await DayPilot.Modal.prompt("Create a new event:", "Event 1");
        dp.clearSelection();
        if (!modal.result) { return; }
        dp.events.add({
          start: args.start,
          end: args.end,
          id: DayPilot.guid(),
          text: modal.result
        });
      },
      eventDeleteHandling: "Update",
      onEventClick: async args => {
        const dp = this.calendar;
        const modal = await DayPilot.Modal.prompt("Update event text:", args.e.text());
        if (!modal.result) { return; }
        const e = args.e;
        e.data.text = modal.result;
        dp.events.update(e);
      },
    };
  }

  get calendar() {
    return this.calendarRef.current.control;
  }

  componentDidMount() {

    const events = [
      {
        id: 1,
        text: "COMP3278 - Tutorial",
        start: "2022-11-21T14:30:00",
        end: "2022-11-21T15:20:00"
      },
      {
        id: 2,
        text: "COMP3330 - Lecture",
        start: "2022-11-21T12:30:00",
        end: "2022-11-21T14:30:00",
        backColor: "#6aa84f"
      },
      {
        id: 3,
        text: "COMP3278 - Lecture",
        start: "2022-11-24T13:30:00",
        end: "2022-11-24T15:30:00",
        backColor: "#f1c232"
      },
      {
        id: 4,
        text: "COMP3330 - Tutorial",
        start: "2022-11-24T12:30:00",
        end: "2022-11-24T13:30:00",
        backColor: "#cc4125"
      },
      {
        id: 5,
        text: "COMP2119 - Lecture",
        start: "2022-11-22T09:30:00",
        end: "2022-11-22T12:30:00",
        backColor: "#cc4125"
      },
      {
        id: 6,
        text: "COMP2119 - Tutorial",
        start: "2022-11-20T20:30:00",
        end: "2022-11-20T21:20:00",
        backColor: "#f1c232"
      },
      {
        id: 7,
        text: "COMP3234 - Lecture",
        start: "2022-11-23T10:30:00",
        end: "2022-11-23T12:20:00",
        backColor: "#6aa84f"
      },
      {
        id: 8,
        text: "COMP3234 - Tutorial",
        start: "2022-11-25T13:30:00",
        end: "2022-11-25T14:20:00",
        backColor: "#6aa84f"
      },
    ];

    const startDate = "2023-03-07";

    this.calendar.update({startDate, events});

  }

  render() {
    return (
      <div style={styles.wrap}>
        <div style={styles.left}>
          <DayPilotNavigator
            selectMode={"week"}
            showMonths={3}
            skipMonths={3}
            startDate={"2022-11-21"}
            selectionDay={"2022-11-21"}
            onTimeRangeSelected={ args => {
              this.calendar.update({
                startDate: args.day
              });
            }}
          />
        </div>
        <div style={styles.main}>
          <DayPilotCalendar
            {...this.state}
            ref={this.calendarRef}
          />
        </div>
      </div>
    );
  }
}

export default Calendar;

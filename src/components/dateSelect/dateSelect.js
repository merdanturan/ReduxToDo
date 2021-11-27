import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateSelect = ({handleCallback}) => {

  ///State for keep selected date from datepicker
  const [startDate, setStartDate] = useState(new Date());


  ///Callback function for send selected date to parent
  handleCallback(startDate);


  ////Months and days for custom datepicker ui
  var months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
    "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];

  var days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];


  //// Custom Stlye for datepicker
  const ExampleCustomInput = React.forwardRef(({ value, onClick }, ref) => (

    <div className="date-container" onClick={onClick} ref={ref}>

      <p className="date-day">
        {value.slice(3, 5)}
      </p>

      <div className="left-05">

        <p className="date-month">
          {months[value.slice(0, 2) - 1].slice(0, 3)}
        </p>
        <p className="date-year">
          {value.slice(6)}
        </p>

      </div>

      <div className="dayname">
        <p>
          {days[new Date(value).getDay()]}
        </p>
      </div>

    </div>
  ));
  /////////////////////////////////////////////////////
  
  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        customInput={<ExampleCustomInput />} />
    </>
  )
}

export default DateSelect

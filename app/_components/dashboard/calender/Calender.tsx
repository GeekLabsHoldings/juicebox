"use client";
import React from "react";
import "./Calender.css";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs from "dayjs";

const RightArrow = () => (
  <svg viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0.279785 2.15107L0.279785 14.2489C0.279785 15.7153 1.76769 16.5373 2.78199 15.6313L9.55453 9.5824C10.3419 8.87949 10.3419 7.52248 9.55453 6.81762L2.78002 0.768678C1.76769 -0.137296 0.279784 0.68472 0.279785 2.15107Z"
      fill="#616161"
    />
  </svg>
);

const LeftArrow = () => (
  <svg viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10.7202 2.15107L10.7202 14.2489C10.7202 15.7153 9.23231 16.5373 8.21801 15.6313L1.44547 9.5824C0.658107 8.87949 0.658107 7.52248 1.44547 6.81762L8.21998 0.768678C9.23231 -0.137296 10.7202 0.68472 10.7202 2.15107Z"
      fill="#616161"
    />
  </svg>
);

const Calender = ({selectedDate, setSelectedDate}: {selectedDate: string, setSelectedDate: (date: string) => void}) => {
  return (
    <section className="overflow-x-hidden overflow-y-auto py-[--sy-5px]">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
        // defaultValue={dayjs('2022-04-19')}
          slots={{ rightArrowIcon: RightArrow, leftArrowIcon: LeftArrow }}
          dayOfWeekFormatter={(weekday) => `${weekday.format("ddd")}`}
          className="custom-calender"
          onChange={(e) => {
            console.log(e);
            setSelectedDate(`${e.$y}-${Number(e.$M) + 1 > 9 ? (Number(e.$M) + 1) : `0${Number(e.$M) + 1}`}-${e.$D > 9 ? e.$D : `0${e.$D}`}`);
            console.log(`${e.$y}-${Number(e.$M) + 1 > 9 ? (Number(e.$M) + 1) : `0${Number(e.$M) + 1}`}-${e.$D > 9 ? e.$D : `0${e.$D}`}`);
            
          }}
        />
      </LocalizationProvider>
    </section>
  );
};

export default Calender;

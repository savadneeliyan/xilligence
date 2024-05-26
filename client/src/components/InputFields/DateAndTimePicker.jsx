import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";

export default function DateAndTimePicker({ value }) {
    const [day, setDay] = React.useState(dayjs("2022-04-17T15:30"));
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateTimePicker"]}>
        <DateTimePicker
          sx={{
            "& .MuiStack-root": {
              pt:0
            },
            "& .MuiInputAdornment-root ": {
              display: "none",
            },
            "& .MuiOutlinedInput-input": {
              padding: "0.688rem 1rem",
              color: "#fff !important",
            },

            "& fieldset ": {
              borderColor: "rgba(61, 71, 81, 0.3) !important",
              outline: "none",
              borderRadius: "0.2rem",
              borderWidth: "0.063rem !important",
            },
          }}
          value={day}
          onChange={(newValue) => setDay(newValue)}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}

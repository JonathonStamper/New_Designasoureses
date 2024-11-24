import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export default function BasicDateCalendar({ onDateChange }) {
  const handleDateChange = (newDate) => {
    if (onDateChange) {
      onDateChange(newDate.format('YYYY-MM-DD')); // Format the date and pass it to the parent
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar onChange={handleDateChange} /> {/* Attach change handler */}
    </LocalizationProvider>
  );
}

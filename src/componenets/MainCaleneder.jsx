import { Box, Typography } from "@mui/material";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import moment from "moment";
import React from "react";

export default function MainCaleneder({ selectedDate, setSelectedDate }) {
  return (
    <Box
      sx={{
        backgroundColor: "#EBEBF0",
        borderTopLeftRadius: "12px",
        padding: "18px",
      }}
    >
      <Box pl={4} pr={4}>
        <Typography variant="h5" fontWeight={600}>
          Test Service
        </Typography>
        <Box display={"flex"} alignItems={"center"} mt={0.5} mb={1}>
          <Typography variant="body2">Timezone:</Typography>
          <Typography variant="body2">Asia/Calcutta</Typography>
        </Box>
      </Box>

      <DateCalendar
        value={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        minDate={moment()}
      />
    </Box>
  );
}

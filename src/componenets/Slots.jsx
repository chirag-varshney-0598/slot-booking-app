import { Box, Button, Grid, MenuItem, Select, Typography } from "@mui/material";
import moment from "moment";
import React, { useState } from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
export default function Slots({ isFetching, timeSlots, selectedDate }) {
  const [selectedSlot, setSelectedSlot] = useState({});
  const [selectedDuration, setSelectedDiration] = useState("30");
  return (
    <Box p={4}>
      <Grid container spacing={1}>
        <Grid item lg={12} xs={12}>
          <Typography variant="body2">SELECT FROM VARIANTS</Typography>
          <Select
            fullWidth
            value={selectedDuration}
            onChange={(e) => setSelectedDiration(e.target.value)}
          >
            <MenuItem value="30">30 mins</MenuItem>
            <MenuItem value="45">45 mins</MenuItem>
            <MenuItem value="60">1 hour</MenuItem>
          </Select>
          <Box
            sx={{ width: "100%", height: "1px", background: "#C7C9D9" }}
            mt={2}
          />
        </Grid>
        <Grid item lg={12} xs={12}>
          <Box>
            <Typography fontSize={12} mb={1}>
              {` ${moment(selectedDate).format("MMMM Do")} - Available Slots`}
            </Typography>
          </Box>
          {isFetching && <Typography variant="body2">Loading...</Typography>}
          {!isFetching && timeSlots?.slots && timeSlots.slots.length === 0 && (
            <Typography variant="body2">No avaialable slots</Typography>
          )}
          <Box sx={{ height: "242px", overflowY: "auto" }}>
            {timeSlots &&
              Array.isArray(timeSlots?.slots) &&
              timeSlots.slots.map((data, i) => {
                return (
                  <SlotButton
                    data={data}
                    key={`slot-${i}`}
                    selectedSlot={selectedSlot}
                    setSelectedSlot={setSelectedSlot}
                  />
                );
              })}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

const SlotButton = ({ data, selectedSlot, setSelectedSlot }) => {
  const isSelected = selectedSlot.start_time === data.start_time ? true : false;
  const btnStyles = {
    border: "1px solid #378760",
    borderRadius: "10px",
    color: isSelected ? "#fff" : "#378760",
    fontWeight: "600",
    marginBottom: "10px",
    backgroundColor: isSelected ? "#378760" : "",
    "&:hover": {
      color: `#378760`,
    },
  };

  return (
    <Button
      fullWidth
      sx={btnStyles}
      onClick={() => setSelectedSlot(data)}
      endIcon={isSelected && <CheckCircleOutlineIcon />}
    >
      {data &&
        `${moment(data?.start_time).format("h:mm a")} - ${moment(
          data?.end_time
        ).format("h:mm a")}`}
    </Button>
  );
};

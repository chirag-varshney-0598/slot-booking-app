import { Box, Container, Grid, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import MainCaleneder from "./MainCaleneder";
import Bottom from "./Bottom";
import { apiRouterCall } from "../apiConfig/services";
import axios from "axios";
import moment from "moment";
import Slots from "./Slots";

export default function Calender() {
  const [selectedDate, setSelectedDate] = useState(moment());
  const [timeSlots, setTimeSlots] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  //function to fetch the available timeslots according to the selected date
  const getAllSlotsHandler = async (source) => {
    try {
      setTimeSlots([]);
      setIsFetching(true);
      const response = await apiRouterCall({
        method: "GET",
        endPoint: "mock_timeslots",
        source: source,
        params: {
          start_date: selectedDate
            ? moment(selectedDate).format("YYYY-MM-DD")
            : moment().format("YYYY-MM-DD"),
          end_date: selectedDate
            ? moment(selectedDate).add(1, "day").format("YYYY-MM-DD")
            : moment().add(1, "day").format("YYYY-MM-DD"),
        },
      });
      if (response.status === 200) {
        setTimeSlots(response?.data && response?.data[0]);
      }
      setIsFetching(false);
    } catch (error) {
      console.log(error);
      setIsFetching(false);
    }
  };
  useEffect(() => {
    const source = axios.CancelToken.source();
    getAllSlotsHandler(source);
    return () => {
      source.cancel();
    };
  }, [selectedDate]);
  return (
    <Container fullWidth maxWidth="md">
      <Box mt={20} mb={10}>
        <Paper sx={{ borderRadius: "16px" }}>
          <Grid container spacing={0}>
            <Grid item lg={6} sm={6} md={6} xs={12}>
              <MainCaleneder
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
              />
            </Grid>
            <Grid item lg={6} sm={6} md={6} xs={12}>
              <Slots
                isFetching={isFetching}
                timeSlots={timeSlots}
                selectedDate={selectedDate}
              />
            </Grid>
            <Grid item lg={12} sm={12} md={12} xs={12}>
              <Bottom />
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Container>
  );
}

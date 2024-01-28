import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React from "react";

export default function Bottom() {
  return (
    <Box className="bottomBox">
      <Typography variant="body2" sx={{ color: "#fff" }}>
        POWERED BY APPOINTO
      </Typography>
      <Button
        endIcon={<ArrowForwardIosIcon />}
        sx={{ background: "#fff", color: "#000" }}
      >
        Next
      </Button>
    </Box>
  );
}

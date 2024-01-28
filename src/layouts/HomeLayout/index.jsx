import React from "react";
import { Box } from "@mui/material";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import TopBar from "./TopBar";

const LayoutContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  color: "#000",
  height: "100%",
  width: "100%",
}));

/*
This component is HOC to unify the header and footer throughout the application for home layout
*/
export default function HomeLayout({ children }) {
  return (
    <LayoutContainer>
      <TopBar />
      <Box>{children}</Box>
    </LayoutContainer>
  );
}

HomeLayout.propTypes = {
  children: PropTypes.node,
};

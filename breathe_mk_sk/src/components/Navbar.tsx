import { Box } from "@mui/material";
import React from "react";
import NightModeToggle from "./NightModeToggle";

const Navbar = () => {
  return (
    <Box
      sx={{
        width: "100%",
        position: "absolute",
        top: "0",
        left: "0",
        display: "flex",
        justifyContent: "end",
      }}
    >
      <NightModeToggle />
    </Box>
  );
};

export default Navbar;

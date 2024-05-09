import React from "react";
import { Box, Grid } from "@mui/material";
import NightModeToggle from "./NightModeToggle";
import Logo from "./Logo";

interface NavbarProps {
  id: string;
}

const Navbar: React.FC<NavbarProps> = ({ id }) => {
  return (
    <Box
      id={id}
      sx={{
        width: "100%",
        position: "absolute",
        top: "0",
        left: "0",
        zIndex: 1000,
      }}
    >
      <Grid
        container
        sx={{ display: "flex", justifyContent: "center", paddingTop: 2 }}
      >
        <Grid
          item
          xs={11}
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Logo />
          <NightModeToggle />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Navbar;

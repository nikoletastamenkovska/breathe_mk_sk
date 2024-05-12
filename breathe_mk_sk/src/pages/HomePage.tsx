import { Box, Grid } from "@mui/material";
import React from "react";
import Map from "../utils/map/Map";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <Box
      sx={{
        width: "100%",
        margin: 0,
        p: 0,
      }}
    >
      <Map />
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid item xs={11}></Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;

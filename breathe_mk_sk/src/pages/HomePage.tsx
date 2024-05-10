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
      }}
    >
      <Map />
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          p: 2,
        }}
      >
        <Grid item xs={11}>
          {/* <h1>Home page</h1> */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;

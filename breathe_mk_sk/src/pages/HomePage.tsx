import { Box, Grid } from "@mui/material";
import React, { Suspense } from "react";
import BreathingLoader from "../components/loader/BreathingLoader";
const MapComponent = React.lazy(() => import("../utils/map/Map"));

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
      {/* <Map /> */}
      <Suspense fallback={<BreathingLoader />}>
        <MapComponent />
      </Suspense>
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

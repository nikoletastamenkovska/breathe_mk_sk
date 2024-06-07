import React from "react";
import { useLocation } from "react-router-dom";
import { Box, Grid } from "@mui/material";

const MakeReportPage = () => {
  const location = useLocation();
  const { address, position } = location.state || {};

  return (
    <Box
      sx={{
        width: "100%",
        margin: 0,
        p: 2,
      }}
    >
      <Grid container sx={{ display: "flex", justifyContent: "center" }}>
        <Grid item xs={11} sx={{ textAlign: "center" }}>
          <h1>Пријави загадување</h1>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MakeReportPage;

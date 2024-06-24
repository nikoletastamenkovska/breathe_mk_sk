import React from "react";
import { useLocation } from "react-router-dom";
import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import PollutantButtonList from "../components/PollutantButtonList";

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
        <Grid item xs={11}>
          <IconButton aria-label="back" size="large" color="primary">
            <ArrowBackIosNewIcon fontSize="inherit" />
          </IconButton>
          <Typography variant="h4" component="h1" sx={{ textAlign: "center" }}>
            Пријави загадување
          </Typography>
          <Typography variant="h6" sx={{ py: 2 }}>
            Избери извор на загадување
          </Typography>
          <PollutantButtonList />
        </Grid>
      </Grid>
      <Grid container sx={{ display: "flex", justifyContent: "center" }}>
        <Grid item xs={11}>
          <hr />
        </Grid>
      </Grid>
      <Grid container sx={{ display: "flex", justifyContent: "center" }}>
        <Grid item xs={11}>
          <Typography variant="h6" sx={{ py: 2 }}>
            Прикачи Фотографија
          </Typography>
        </Grid>
      </Grid>
      <Grid container sx={{ display: "flex", justifyContent: "center" }}>
        <Grid item xs={11}>
          <hr />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MakeReportPage;

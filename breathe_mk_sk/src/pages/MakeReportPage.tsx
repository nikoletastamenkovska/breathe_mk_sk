import React from "react";
import { useLocation } from "react-router-dom";
import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

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
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "space-around",
              padding: 3,
            }}
          >
            <Button
              size="large"
              sx={{
                display: "flex",
                flexDirection: "column",
                p: 2,
                width: "33.33%",
              }}
            >
              <img
                src="/images/factory.png"
                style={{ width: "75px", aspectRatio: 1, marginBottom: "20px" }}
              ></img>
              Фабрика
            </Button>
            <Button
              size="large"
              sx={{
                display: "flex",
                flexDirection: "column",
                p: 2,
                width: "33.33%",
              }}
            >
              <img
                src="/images/home_image.png"
                style={{
                  width: "75px",
                  aspectRatio: 1,
                  marginBottom: "20px",
                }}
              ></img>
              Домакинство
            </Button>
            <Button
              size="large"
              sx={{
                display: "flex",
                flexDirection: "column",
                p: 2,
                width: "33.33%",
              }}
            >
              <img
                src="/images/air_polution.png"
                style={{ width: "75px", aspectRatio: 1, marginBottom: "20px" }}
              ></img>
              Друго
            </Button>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MakeReportPage;

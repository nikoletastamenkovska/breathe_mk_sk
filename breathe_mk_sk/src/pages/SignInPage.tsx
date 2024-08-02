import { Box, Grid } from "@mui/material";
import React from "react";

const SignInPage = () => {
  return (
    <Box
      sx={{
        width: "100%",
        margin: 0,
        p: 2,
      }}
    >
      <Grid container sx={{ display: "flex", justifyContent: "center" }}>
        <Grid item xs={11}></Grid>
      </Grid>
    </Box>
  );
};

export default SignInPage;

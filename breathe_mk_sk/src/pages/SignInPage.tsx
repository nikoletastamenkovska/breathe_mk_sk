import React from "react";
import { Box, Grid } from "@mui/material";

const SignInPage: React.FC = () => {
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
          Sign in page
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignInPage;

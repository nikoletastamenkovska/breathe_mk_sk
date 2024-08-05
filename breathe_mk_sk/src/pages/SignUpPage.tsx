import React from "react";
import { Box, Grid } from "@mui/material";
import SignUpForm from "../components/SignUpForm";
import { IFormInputs } from "../types/signup";

const SignUpPage: React.FC = () => {
  const onSubmit = (data: IFormInputs) => {
    console.log(data);
  };
  return (
    <Box
      sx={{
        width: "100%",
        margin: 0,
        p: 2,
      }}
    >
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginInline: "auto",
        }}
      >
        <SignUpForm onSubmit={onSubmit} />
      </Grid>
    </Box>
  );
};

export default SignUpPage;

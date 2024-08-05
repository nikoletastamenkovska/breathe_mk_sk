import React from "react";
import { Box, Grid } from "@mui/material";
import SignUpForm from "../components/SignUpForm";
import { IFormInputs } from "../types/signup";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const SignUpPage: React.FC = () => {
  const navigate = useNavigate;
  const handleSignUpSubmit: SubmitHandler<IFormInputs> = (data) => {
    // Store in ls
    localStorage.setItem("formData", JSON.stringify(data));
    console.log("Form data stored in local storage:", data);
    // Redirect to the profile page
    // navigate("/the profile page")
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
        <SignUpForm onSubmit={handleSignUpSubmit} />
      </Grid>
    </Box>
  );
};

export default SignUpPage;

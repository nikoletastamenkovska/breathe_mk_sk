import React from "react";
import { useNavigate } from "react-router-dom";
import { SubmitHandler } from "react-hook-form";
import SignUpForm from "../components/SignUpForm";
import { IFormInputs } from "../types/signup";
import { Alert, Box, Grid, Snackbar } from "@mui/material";

const SignUpPage: React.FC = () => {
  const navigate = useNavigate();

  const [confirmationMessage, setConfirmationMessage] = React.useState<
    string | null
  >(null);

  const handleSignUpSubmit: SubmitHandler<IFormInputs> = (data) => {
    localStorage.setItem("formData", JSON.stringify(data));
    console.log("Form data stored in local storage:", data);

    setConfirmationMessage(
      "A confirmation email has been sent. Please check your email to complete the registration process."
    );

    setTimeout(() => {
      navigate("/sign-in");
    }, 2500);
  };

  const handleClose = () => {
    setConfirmationMessage(null);
  };

  return (
    <Box
      sx={{
        width: "100%",
        margin: 0,
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
        {confirmationMessage && (
          <Snackbar
            open={true}
            onClose={handleClose}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
          >
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              {confirmationMessage}
            </Alert>
          </Snackbar>
        )}
      </Grid>
    </Box>
  );
};

export default SignUpPage;

import React from "react";
import { Alert, Box, Grid, Snackbar } from "@mui/material";
import LogInForm from "../components/LogInForm";
import { ILIFormInputs } from "../types/signup";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const SignInPage: React.FC = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  const handleLogInSubmit: SubmitHandler<ILIFormInputs> = (data) => {
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      const userData = JSON.parse(storedData);

      if (
        userData.email === data.email &&
        userData.password === data.password
      ) {
        navigate(`/profile/${userData.username}`);
      } else {
        setErrorMessage("Invalid email or password. Please try again.");
      }
    } else {
      setErrorMessage("No account found. Please sign up first.");
    }
  };

  const handleClose = () => {
    setErrorMessage(null);
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
        <LogInForm onSubmit={handleLogInSubmit} />
        {errorMessage && (
          <Snackbar
            open={true}
            onClose={handleClose}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
          >
            <Alert
              onClose={handleClose}
              severity="error"
              sx={{ width: "100%" }}
            >
              {errorMessage}
            </Alert>
          </Snackbar>
        )}
      </Grid>
    </Box>
  );
};

export default SignInPage;

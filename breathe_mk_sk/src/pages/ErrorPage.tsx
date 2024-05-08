import { Box, Button, Paper, Stack } from "@mui/material";
import { Link, useRouteError } from "react-router-dom";

interface ErrorProps {
  statusText?: string;
  message?: string;
}

const ErrorPage = () => {
  const error = useRouteError() as ErrorProps;
  console.error(error);

  return (
    <Box
      sx={{
        backgroundImage: 'url("/images/bg/bg_404.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
      }}
    >
      <Box
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        fontSize="large"
        id="error-page"
      >
        <Stack spacing={3}>
          <Box component="h1">Oops!</Box>
          <Box component="p">
            <i>{error.statusText || error.message}</i>
          </Box>
          <Box component="p">Looks like we've encountered a digital storm.</Box>
          <Box component="p">
            Don't worry, we're{" "}
            <Link to={"/"}>
              <Button
                aria-label="back-to-home"
                size="large"
                color="error"
                style={{
                  boxShadow:
                    "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
                }}
              >
                navigating
              </Button>
            </Link>{" "}
            through it!
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default ErrorPage;

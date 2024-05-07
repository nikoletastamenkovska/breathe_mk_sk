import { Box, Paper, Stack } from "@mui/material";
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
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      id="error-page"
    >
      <Stack spacing={2}>
        <Box component="h1">Oops!</Box>
        <Box component="p">
          <i>{error.statusText || error.message}</i>
        </Box>
        <Box component="p">Looks like we've encountered a digital storm..</Box>
        <Box component="p">
          Don't worry, we're <Link to={"/"}>navigating</Link> through it!
        </Box>
      </Stack>
    </Box>
  );
};

export default ErrorPage;

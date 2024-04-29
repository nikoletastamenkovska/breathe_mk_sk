import { Box } from "@mui/material";
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
      <div>
        <h1>Oops!</h1>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <p>Looks like we've encountered a digital storm..</p>
        <p>
          Don't worry, we're{" "}
          <Link to={"/"} style={{ color: "var(--green-color)" }}>
            navigating
          </Link>{" "}
          through it!
        </p>
      </div>
    </Box>
  );
};

export default ErrorPage;

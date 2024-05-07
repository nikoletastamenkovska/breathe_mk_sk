import { Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const NotFoundRoute = () => {
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
        <Box component="p">Lost in the digital maze?</Box>
        <Box component="p">
          Let's get you back on track!{" "}
          <Link to={"/"}>
            <ArrowBackIcon
              style={{ color: "var(--green-color)", marginBottom: "-10px" }}
              fontSize="large"
            />
          </Link>
        </Box>
      </Stack>
    </Box>
  );
};

export default NotFoundRoute;

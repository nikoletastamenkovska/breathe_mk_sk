import { Box } from "@mui/material";
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
      <div>
        <h1>Oops!</h1>
        <p>Lost in the digital maze?</p>
        <p>
          Let's get you back on track!{" "}
          <Link to={"/"}>
            <ArrowBackIcon
              style={{ color: "var(--green-color)" }}
              fontSize="large"
            />
          </Link>
        </p>
      </div>
    </Box>
  );
};

export default NotFoundRoute;

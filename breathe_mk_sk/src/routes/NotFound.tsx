import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { Box, IconButton, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const NotFoundRoute = () => {
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
        className="dark"
        id="error-page"
      >
        <Stack spacing={3}>
          <h1>Oops!</h1>
          <h3>Lost in the digital maze?</h3>
          <h3>
            Let's get you back on track!{" "}
            <Link to={"/"}>
              <IconButton
                aria-label="back-to-home"
                size="large"
                style={{
                  boxShadow:
                    "0 8px 16px 0 rgba(0,0,0,0.5), 0 6px 20px 0 rgba(0,0,0,0.5)",
                }}
              >
                <KeyboardReturnIcon className="link dark" fontSize="large" />
              </IconButton>
            </Link>
          </h3>
        </Stack>
      </Box>
    </Box>
  );
};

export default NotFoundRoute;

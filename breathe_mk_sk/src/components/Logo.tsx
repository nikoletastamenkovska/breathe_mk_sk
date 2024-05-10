import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

const Logo: React.FC = () => {
  return (
    <Box>
      <Link to={"/"}>
        <img src="/logo.png" alt="" />
      </Link>
    </Box>
  );
};

export default Logo;

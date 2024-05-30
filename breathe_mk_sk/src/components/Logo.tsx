import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import "./loader/BreathingLoader.css";

const Logo: React.FC = () => {
  return (
    <Box>
      <Link to={"/"}>
        <img
          src="/logo.png"
          alt="image og lungs serving the purpose of the logo"
          className="breathing-logo"
        />
      </Link>
    </Box>
  );
};

export default Logo;

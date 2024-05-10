import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Box, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import TransitionalModal from "./TransitionalModal";

const Footer: React.FC = () => {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        margin: 0,
      }}
      className="footer"
    >
      <Grid item xs={11}>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Grid item xs={6}>
            <TransitionalModal />
          </Grid>
          <Grid
            item
            xs={6}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Link to="/" className="icon-link">
              <PersonOutlineOutlinedIcon
                color="secondary"
                fontSize="large"
                sx={{ mt: 1, mr: 3 }}
              />
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;

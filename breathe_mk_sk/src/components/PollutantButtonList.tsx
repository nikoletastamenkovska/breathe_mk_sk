import React from "react";
import pollutantNames from "../utils/lists/pollution-buttons-list";
import { Button, Grid } from "@mui/material";

const PollutantButtonList = () => {
  return (
    <Grid
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 3,
      }}
    >
      {pollutantNames.map(({ name, imgSrc }, index) => (
        <Button
          key={index}
          size="large"
          sx={{
            display: "flex",
            flexDirection: "column",
            py: 2,
            width: "32.5%",
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
          }}
        >
          <img
            src={imgSrc}
            style={{ width: "75px", aspectRatio: 1, marginBottom: "20px" }}
          ></img>
          {name}
        </Button>
      ))}
    </Grid>
  );
};

export default PollutantButtonList;

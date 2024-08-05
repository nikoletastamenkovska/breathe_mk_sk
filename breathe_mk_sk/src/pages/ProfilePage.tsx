import { Box, Grid } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";

const ProfilePage: React.FC = () => {
  const { username } = useParams<{ username: string }>();

  return (
    <Box
      sx={{
        width: "100%",
        margin: 0,
        p: 2,
      }}
    >
      <Grid container sx={{ display: "flex", justifyContent: "center" }}>
        <Grid item component="h2" xs={11}>
          Wellcome back {username}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfilePage;

import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import { Divider, Grid, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const TransitionalModal = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Button onClick={handleOpen}>
        <HomeIcon color="secondary" fontSize="large" />
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              margin: 0,
              position: "absolute" as "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              p: 2,
              bgcolor: theme.palette.primary.dark,
              color: theme.palette.primary.contrastText,
            }}
          >
            <Grid
              container
              sx={{
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Grid item xs={11}>
                <Grid container spacing={2} sx={{ m: 0, p: 0 }}>
                  <Grid
                    item
                    xs={5}
                    md={4}
                    sx={{
                      borderRight: `1px solid ${theme.palette.divider}`,
                      mt: 2,
                      pl: 3,
                    }}
                  >
                    <Typography>
                      <Link to={"/"} className="link ">
                        За нас
                      </Link>
                    </Typography>
                    <Typography>
                      <Link to={"/"} className="link ">
                        Блог
                      </Link>
                    </Typography>
                    <Typography>
                      <Link to={"/"} className="link ">
                        Полиса на приватност
                      </Link>
                    </Typography>
                    <Typography>
                      <Link to={"/"} className="link ">
                        Легални аспекти
                      </Link>
                    </Typography>
                    <Typography>
                      <Link to={"/"} className="link ">
                        Контакт
                      </Link>
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={7}
                    md={8}
                    sx={{
                      mt: 2,
                      pr: 3,
                    }}
                  >
                    <Grid container>
                      <Grid item xs={12}>
                        <Typography
                          variant="h6"
                          component="h2"
                          sx={{
                            textTransform: "uppercase",
                            textAlign: "end",
                          }}
                        >
                          Ти велат дека не можеш ништо? Те лажат. Диши слободно.
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sx={{
                          display: "flex",
                          justifyContent: "flex-end",
                          alignItems: "center",
                          paddingBlock: 2,
                        }}
                      >
                        <Button variant="contained">Регистирај се</Button>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "end",
                        }}
                      >
                        <img
                          src="/images/skopje_logo.png"
                          alt="Logo of city Skopje"
                          className="logo_org"
                        />
                        <img
                          src="/images/air_care_logo.png"
                          alt="Logo of Air care org"
                          className="logo_org"
                        />
                        <img
                          src="/images/earth_care_logo.jpg"
                          alt="Logo of Earth care org"
                          className="logo_org"
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={11} p={1}>
                <Divider />
                <Typography
                  sx={{
                    textAlign: "center",
                    marginTop: 2,
                  }}
                >
                  Следи не на социјалните мрежи
                </Typography>
                <Grid
                  container
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                  }}
                >
                  <Grid
                    item
                    xs={12}
                    md={4}
                    sx={{
                      marginTop: 2,
                      display: "flex",
                      justifyContent: "space-around",
                      alignContent: "center",
                    }}
                  >
                    <Link to={"/"}>
                      <FacebookIcon
                        fontSize="large"
                        color="secondary"
                        className="social-icons"
                      />
                    </Link>
                    <Link to={"/"}>
                      <InstagramIcon
                        fontSize="large"
                        color="secondary"
                        className="social-icons"
                      />
                    </Link>
                    <Link to={"/"}>
                      <LinkedInIcon
                        fontSize="large"
                        color="secondary"
                        className="social-icons"
                      />
                    </Link>
                    <Link to={"/"}>
                      <TwitterIcon
                        fontSize="large"
                        color="secondary"
                        className="social-icons"
                      />
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default TransitionalModal;

import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { useNavigate } from "react-router-dom";
import { TransitionalDialogProps } from "../types/geolocation";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const TransitionalDialog: React.FC<TransitionalDialogProps> = ({
  position,
  address,
}) => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRedirect = () => {
    navigate("/make-report", {
      state: { address, position },
    });
  };

  return (
    <React.Fragment>
      <Button
        variant="contained"
        sx={{
          position: "fixed",
          bottom: "2%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "65px",
          height: "65px",
          borderRadius: "50%",
          fontSize: "65px",
          padding: 0,
          paddingLeft: "5px",
          textAlign: "center",
          fontWeight: "100",
          zIndex: 9,
        }}
        onClick={handleClickOpen}
      >
        +
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          {"Дали е ова точната локација каде сакате да пријавите загадување?"}
        </DialogTitle>
        <DialogContent color="disabled">
          {address}{" "}
          {position
            ? `${position.lat}, ${position.lng}`
            : "Немате изберена локација."}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>x</Button>
          {position ? <Button onClick={handleRedirect}>Потврди</Button> : null}
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default TransitionalDialog;

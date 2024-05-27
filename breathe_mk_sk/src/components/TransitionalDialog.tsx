import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import React from "react";
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
}) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
        variant="contained"
        sx={{
          position: "absolute",
          bottom: "25px",
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
          {position
            ? `${position.lat}, ${position.lng}`
            : "Немате изберена локација."}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>x</Button>
          <Button onClick={handleClose}>Потврди</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default TransitionalDialog;

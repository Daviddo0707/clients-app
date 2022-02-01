import React from "react";
import { Snackbar, Alert } from "@mui/material";

const SuccessSnackBar = ({ openSnackBar, onCloseSnack }) => {
  return (
    <Snackbar
      open={openSnackBar}
      autoHideDuration={5000}
      onClose={onCloseSnack}
    >
      <Alert onClose={onCloseSnack} severity="success" sx={{ width: "100%" }}>
        User added successfully!
      </Alert>
    </Snackbar>
  );
};

export default SuccessSnackBar;

import React from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../../redux/usersSlice";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const DeleteUserDialog = ({ onCloseDialog, openDialog, user }) => {
  const { id, fullName } = user;
  const dispatch = useDispatch();

  const handleDeleteUser = () => {
    dispatch(deleteUser(id));
    onCloseDialog();
  };

  return (
    <Dialog open={openDialog} onClose={onCloseDialog}>
      <DialogTitle>Delete {fullName}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to remove {fullName} from users list ?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCloseDialog}>CANCEL</Button>
        <Button onClick={handleDeleteUser} variant="outlined" color="error">
          DELETE
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteUserDialog;

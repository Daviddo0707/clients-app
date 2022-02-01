import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/usersSlice";
import { useForm, Controller } from "react-hook-form";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  Box,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
} from "@mui/material";
import SuccessSnackBar from "./SuccessSnackBar";
import styled from "@emotion/styled";
import AddButton from "./AddButton";

const FormTextField = styled(TextField)`
  max-width: 350px;
`;

const AddUserDialog = ({ userList }) => {
  const dispatch = useDispatch();
  const [openDialog, setOpenDialog] = useState(false);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [formError, setFormError] = useState("");

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      id: "",
      fullName: "",
      phoneNumber: "",
      ipAddress: "",
    },
  });
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setFormError("");
    reset();
    setOpenDialog(false);
  };

  const handleCloseSnack = () => setOpenSnackBar(false);

  const onSubmit = (data) => {
    const found = userList.find((user) => user.id === data.id);
    if (!found) {
      dispatch(addUser(data));
      handleCloseDialog();
      setOpenSnackBar(true);
    } else {
      setFormError(
        "*The user's ID number already exists in the system, please select another ID number."
      );
    }
  };

  return (
    <div>
      <AddButton onOpenDialog={handleOpenDialog} />
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        fullWidth
        maxWidth={"xs"}
      >
        <DialogTitle>Add user form</DialogTitle>
        <DialogContent>
          <DialogContentText>
            The following form will allow you to add a user to the system.
          </DialogContentText>
          <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            <Grid container direction="column">
              <Controller
                name="fullName"
                control={control}
                render={({ field }) => (
                  <FormTextField
                    label="Name"
                    placeholder="Enter Full Name.."
                    autoFocus
                    required
                    margin="dense"
                    variant="standard"
                    {...field}
                  />
                )}
              />
              <Controller
                name="phoneNumber"
                control={control}
                render={({ field }) => (
                  <FormTextField
                    label="Phone"
                    placeholder="Enter Phone Number.."
                    autoFocus
                    required
                    margin="dense"
                    variant="standard"
                    {...field}
                  />
                )}
              />
              <Controller
                name="id"
                control={control}
                render={({ field }) => (
                  <FormTextField
                    label="ID"
                    placeholder="Enter User ID.."
                    autoFocus
                    required
                    margin="dense"
                    variant="standard"
                    {...field}
                  />
                )}
              />
              <Controller
                name="ipAddress"
                control={control}
                render={({ field }) => (
                  <FormTextField
                    label="IP adress"
                    placeholder="Enter ip Address.."
                    autoFocus
                    required
                    margin="dense"
                    variant="standard"
                    {...field}
                  />
                )}
              />
              <p style={{ color: "red" }}>{formError}</p>
            </Grid>
            <DialogActions>
              <Button onClick={handleCloseDialog}>Cancel</Button>
              <Button type="submit">Save</Button>
            </DialogActions>
          </Box>
        </DialogContent>
      </Dialog>
      <SuccessSnackBar
        openSnackBar={openSnackBar}
        onCloseSnack={handleCloseSnack}
      />
    </div>
  );
};

export default AddUserDialog;

import { useState } from "react";
import DeleteUserDialog from "./delete-user/DeleteUserDialog";
import { Card, Grid, IconButton, Typography, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import styled from "@emotion/styled";

const UserCard = styled(Card)`
  padding: 20px;
  width: 300px;
  max-width: 80vw;
`;

const User = ({ user }) => {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const { fullName, phoneNumber, ipAddress, city, country } = user;

  const handleOpenDialog = () => {
    setOpenDeleteDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDeleteDialog(false);
  };

  return (
    <div>
      <UserCard elevation={10}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ margin: "0" }}
          >
            {fullName}
          </Typography>
          <Tooltip title="Delete User">
            <IconButton onClick={handleOpenDialog}>
              <DeleteIcon sx={{ color: "red", fontSize: "30px" }} />
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid textAlign="start">
          <p>
            <b>Phone Number: </b> {phoneNumber}{" "}
          </p>
          <p>
            <b>IP Address: </b> {ipAddress}
          </p>
          <p>
            <b>City: </b> {city}
          </p>
          <p>
            <b>Country: </b> {country}
          </p>
        </Grid>
      </UserCard>
      <DeleteUserDialog
        onCloseDialog={handleCloseDialog}
        openDialog={openDeleteDialog}
        user={user}
      />
    </div>
  );
};
export default User;

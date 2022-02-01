import { Grid } from "@mui/material";

import User from "./User";

const UserList = ({ userList }) => {
  return (
    <Grid
      item
      container
      justifyContent="center"
      spacing={4}
      sx={{ padding: "20px" }}
    >
      {userList.map((user) => (
        <Grid key={user.id} item>
          <User user={user} />
        </Grid>
      ))}
    </Grid>
  );
};

export default UserList;

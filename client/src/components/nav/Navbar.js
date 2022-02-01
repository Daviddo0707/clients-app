import { AppBar, Box, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Humanz
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navbar;

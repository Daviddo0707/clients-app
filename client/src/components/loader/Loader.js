import React from "react";
import { CircularProgress, Box } from "@mui/material";

const Loader = () => {
  return (
    <Box sx={{ margin: "30px" }}>
      <CircularProgress size={200} />
    </Box>
  );
};

export default Loader;

import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const AddButton = ({ onOpenDialog }) => {
  return (
    <Tooltip title="Click for adding user">
      <IconButton onClick={onOpenDialog}>
        <AddCircleOutlineIcon sx={{ fontSize: "40px" }} />
      </IconButton>
    </Tooltip>
  );
};

export default AddButton;

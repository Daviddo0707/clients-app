import React from "react";
import { TextField } from "@mui/material";

const SearchBar = ({ searchChange }) => {
  return (
    <div>
      <TextField
        label="Search User.."
        sx={{ width: "350px", maxWidth: "60vw" }}
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBar;

import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";

const search = (props) => {
  // hooks and any non jsx code
  const [searchText, setText] = useState("");

  const handleButtonAdd = () => {
    if (searchText !== "") {
      props.handleItemAdd(searchText);
      setText("");
    }
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <React.Fragment>
      <Box
        display="flex"
        flexdirection="row"
        alignItems="center"
        justifyContent="center"
        bgcolor="#D6D2CB"
      >
        <TextField
          id="outlined-basic"
          label="Item Name"
          variant="outlined"
          value={searchText}
          onChange={handleChange}
          placeholder="Ex: CSS"
        />
        <Button variant="outlined" color="secondary" onClick={handleButtonAdd}>
          Add Item
        </Button>
      </Box>
    </React.Fragment>
  );
};
export default search;

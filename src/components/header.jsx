import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const header = (props) => {
  // hooks and any non jsx code
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <Typography variant="h3" gutterBottom>
        Manage my items
      </Typography>
    </Box>
  );
};

export default header;

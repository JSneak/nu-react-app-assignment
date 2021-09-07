import React from "react";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import Box from "@material-ui/core/Box";

const CustomListItem = ({ item, handleItemDelete }) => {
  return (
    <Box bgcolor="#C28D9F">
      <ListItem divider>
        <ListItemText primary={item.name} />
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => {
              handleItemDelete(item.id);
            }}
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </Box>
  );
};

export default CustomListItem;

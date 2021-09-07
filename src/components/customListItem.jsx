import React from "react";
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';

const CustomListItem = ({item, handleItemDelete}) => {


    return (
        <ListItem>
            <ListItemText
                primary={item.name}
            />
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" onClick={handleItemDelete(item.id)}>
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default CustomListItem
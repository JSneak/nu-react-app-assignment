import React from "react"
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ListItem from './listItem'
import DeleteIcon from '@material-ui/icons/Delete';

const ListSection = ({itemList, handleItemDelete}) => {
    // hooks and any non jsx code
    console.log("List Section ");
    console.log(itemList);

    return (
        <React.Fragment>
            <Container display="flex" flexdirection="column">
            <Typography variant="h3" gutterBottom>
                My Items {itemList.length}
            </Typography>
            <ul>
            {itemList.map(item => {
               return (
                   <li key={item.id}>
                    <ListItem item={item} />
                    <a onClick={handleItemDelete(item.id)}><DeleteIcon /></a>
                   </li>
               )
           })}
           </ul>
            </Container>
        </React.Fragment>
    )
}
export default ListSection
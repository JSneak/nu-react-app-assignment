import React from "react"
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import CustomListItem from './customListItem'


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
            <List>
                {itemList.map(item => {
                    return (
                        <React.Fragment key={item.id}>
                            <CustomListItem item={item} handleItemDelete={handleItemDelete}></CustomListItem>
                        </React.Fragment>
                    )
                })}
           </List>
            </Container>
        </React.Fragment>
    )
}
export default ListSection
import React from "react"
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ListItem from './listItem'

const ListSection = ({itemList}) => {
    // hooks and any non jsx code
    return (
        <React.Fragment>
            <Container display="flex" flexdirection="column">
            <Typography variant="h3" gutterBottom>
                My Items {Object.keys(itemList).length}
            </Typography>
            <ul>
            {itemList.map(item => {
               return (
                   <li key={item.id}>
                    <ListItem item={item} />
                   </li>
               )
           })}
           </ul>
            </Container>
        </React.Fragment>
    )
}
export default ListSection
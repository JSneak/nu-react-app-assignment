import React from "react"
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const search = (props) => {
    // hooks and any non jsx code
    return (
        <React.Fragment>
            <Container display="flex" flexdirection="row">
                <TextField id="outlined-basic" label="Outlined" variant="outlined"/>
                <Button variant="outlined" color="secondary">
                    Add Item
                </Button>
            </Container>
        </React.Fragment>
    )
}
export default search
import React from "react"
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';


const header = (props) => {
    // hooks and any non jsx code
    return (
        <Container display="flex">
            <Typography variant="h3" gutterBottom>
                Manage my items
            </Typography>
        </Container>
    )
}

export default header
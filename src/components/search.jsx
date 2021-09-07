import React, { useState } from "react"
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const search = (props) => {
    // hooks and any non jsx code
    const [searchText, setText] = useState("")

    const handleButtonAdd = () => {
        if(searchText !== "") {
            props.handleItemAdd(searchText);
            setText("");
        }
    }

    const handleChange = (event) => {
        setText(event.target.value);
      };
    

    return (
        <React.Fragment>
            <Container display="flex" flexdirection="row">
                <TextField id="outlined-basic" label="Outlined" variant="outlined" value={searchText} onChange={handleChange}/>
                <Button variant="outlined" color="secondary" onClick={handleButtonAdd}>
                    Add Item
                </Button>
            </Container>
        </React.Fragment>
    )
}
export default search
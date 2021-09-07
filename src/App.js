import React, { useState } from "react";
import "./App.css";
import data from "./data/data.json";
import Container from "@material-ui/core/Container";
import Header from "./components/header";
import Search from "./components/search";
import List from "./components/list";

function App() {
  const [itemList, setItemList] = useState(data);

  const handleItemAdd = (n_name) => {
    const new_id = itemList.length + 1;
    /* Modify Item List to add an item */
    const newList = [
      ...itemList,
      { id: new_id, name: n_name },
    ]; /* spread operator */
    /* Then I need to update the itemList with setItemList */
    setItemList(newList);
    /* Then I pass this to a child component */
    console.log(newList);
  };

  return (
    <div className="App">
      <Container maxWidth="lg" display="flex" flexdirection="column">
        <Header></Header>
        <Search handleItemAdd={handleItemAdd}></Search>
        <List itemList={itemList}></List>
      </Container>
    </div>
  );
}

export default App;

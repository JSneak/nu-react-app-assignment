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
    var new_id = Math.floor(Math.random() * 10000);
    /* Modify Item List to add an item */
    itemList.push({ id: new_id, name: n_name });
    /* Then I need to update the itemList with setItemList */
    setItemList(itemList);
    /* Then I pass this to a child component */
    console.log(itemList);
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

import React, { useState } from "react";
import "./App.css";
import data from "./data/data.json";
import Container from "@material-ui/core/Container";
import Header from "./components/header";
import Search from "./components/search";
import List from "./components/list";

function App() {
  const [itemList, setItemList] = useState(data);

  return (
    <div className="App">
      <Container maxWidth="lg" display="flex" flexdirection="column">
        <Header></Header>
        <Search></Search>
        <List itemList={itemList}></List>
      </Container>
    </div>
  );
}

export default App;

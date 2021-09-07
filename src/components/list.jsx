import React from "react";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import CustomListItem from "./customListItem";
import Box from "@material-ui/core/Box";

const ListSection = ({ itemList, handleItemDelete }) => {
  // hooks and any non jsx code
  console.log("List Section ");
  console.log(itemList);

  return (
    <React.Fragment>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        bgcolor="#DECAA1"
      >
        <Typography variant="h3" gutterBottom>
          My Items {itemList.length}
        </Typography>
        <List>
          {itemList.map((item) => {
            return (
              <React.Fragment key={item.id}>
                <CustomListItem
                  item={item}
                  handleItemDelete={handleItemDelete}
                ></CustomListItem>
              </React.Fragment>
            );
          })}
        </List>
      </Box>
    </React.Fragment>
  );
};
export default ListSection;

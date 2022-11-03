import { Box, Card, List, ListItem, Typography } from "@mui/material";
import { useState } from "react";
import Pagination from "../src/components/Pagination";

function App() {
  // create currentPage state
  const [currentPage, setCurrentPage] = useState(1);

  // set number of items for every page
  const itemPerPage = 4;

  // get the index number of last and first item
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;

  // use those index numbers on items array
  // use currentItems for mapping items
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const totalPage = Math.ceil(items.length / itemPerPage);

  // pass totalPage and setCurrentPage into Pagination component

  return (
    <>
      <Box className="container">
        <Typography
          variant="h1"
          sx={{ fontSize: "30px", textTransform: "uppercase" }}
        >
          mui-pagination
        </Typography>
        <Card
          sx={{
            p: "10px",
            maxWidth: "500px",
            width: "fit-content",
            my: "50px",
            p: "20px",
          }}
        >
          <List>
            {currentItems.map((item, index) => (
              <ListItem key={index} divider primary={index + 1}>
                <Typography sx={{ m: "10px" }}>{item.title}</Typography>
              </ListItem>
            ))}
          </List>
        </Card>
        <Pagination pages={totalPage} setCurrentPage={setCurrentPage} />
      </Box>
    </>
  );
}

export default App;

const items = [
  { title: "1 - Lorem ipsum dolor sit amet." },
  { title: "2 - Lorem ipsum dolor sit amet." },
  { title: "3 - Lorem ipsum dolor sit amet." },
  { title: "4 - Lorem ipsum dolor sit amet." },
  { title: "5 - Lorem ipsum dolor sit amet." },
  { title: "6 - Lorem ipsum dolor sit amet." },
  { title: "7 - Lorem ipsum dolor sit amet." },
  { title: "8 - Lorem ipsum dolor sit amet." },
  { title: "9 - Lorem ipsum dolor sit amet." },
  { title: "10 - Lorem ipsum dolor sit amet." },
];

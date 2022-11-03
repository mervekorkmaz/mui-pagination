import { Pagination } from "@mui/material";
import React from "react";

export default function PaginationPage({ setCurrentPage, pages }) {
  // changeHandler function must get two values
  // the event itself and the result of the event
  const changeHandler = (event, currentPage) => {
    console.log(event);
    // pass that result into setCurrentPage
    setCurrentPage(currentPage);
  };

  //* pass pages value into count
  return <Pagination count={pages} onChange={changeHandler} />;
}

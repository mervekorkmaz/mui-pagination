import { Pagination } from "@mui/material";
import React from "react";

export default function PaginationPage({ setCurrentPage, pages }) {
  // changeHandler function should take two values
  // the event itself and the result of the event
  const changeHandler = (event, currentPage) => {
    setCurrentPage(currentPage);
  };

  //* pass pages value into count
  return <Pagination count={pages} onChange={changeHandler} />;
}

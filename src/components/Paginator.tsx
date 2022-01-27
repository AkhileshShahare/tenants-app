import React from "react";
import TablePagination from "@mui/material/TablePagination";

interface PaginatorProps {
  page: number;
  rowsPerPage: number;
  totalCount: number;
  setPage: (page: number) => void;
}

export const Paginator = ({
  page,
  rowsPerPage,
  totalCount,
  setPage
}: PaginatorProps) => {
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  return (
    <TablePagination
      component="div"
      count={totalCount}
      page={page}
      rowsPerPageOptions={[]}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
    />
  );
};

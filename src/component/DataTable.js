import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

const DataTable = ({
  rows,
  columns,
  loading,
  sx,
  onPageChange,
  page,
  pageSize,
}) => {
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      loading={loading}
      sx={sx}
      hideFooterPagination
      pageSize={pageSize}
      page={page}
      onPageChange={onPageChange}
    />
  );
};

export default DataTable;

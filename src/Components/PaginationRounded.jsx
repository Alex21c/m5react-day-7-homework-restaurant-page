import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationRounded({updateCurrentPage, totalNoOfPages}) {
  return (
    <Stack spacing={2}>     
      <Pagination count={totalNoOfPages} variant="outlined" shape="rounded" color="primary" onChange={(e, value)=>{
        // console.log(value)
        updateCurrentPage(value);
        }}/>
    </Stack>
  );
}
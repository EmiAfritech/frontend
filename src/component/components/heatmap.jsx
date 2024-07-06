// src/HeatMapGrid.js
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';

const data = [
  { id: 1, name: 'John', score: 65 },
  { id: 2, name: 'Jane', score: 80 },
  { id: 3, name: 'Jack', score: 45 },
  { id: 4, name: 'Jill', score: 90 },
];

const columns = [
  { field: 'name', headerName: 'Name', width: 150 },
  {
    field: 'score',
    headerName: 'Score',
    width: 150,
    renderCell: (params) => (
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: getHeatMapColor(params.value),
          color: 'white',
        }}
      >
        {params.value}
      </Box>
    ),
  },
];

const getHeatMapColor = (value) => {
  if (value >= 80) return 'green';
  if (value >= 60) return 'yellow';
  if (value >= 40) return 'orange';
  return 'red';
};

const HeatMapGrid = () => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={data} columns={columns} />
    </div>
  );
};

export default HeatMapGrid;

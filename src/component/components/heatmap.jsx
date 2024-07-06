// src/HeatMapGrid.js
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';

const data = [
  { id: 1, name: 'almost in possible', score: 65, insignificant: 65, minor: 65, moderate: 65, major: 65, catastrophic: 65 },
  { id: 2, name: 'unlikly', score: 80, insignificant: 80, minor: 80, moderate: 80, major: 80, catastrophic: 80 },
  { id: 3, name: 'likly', score: 45, insignificant: 45, minor: 45, moderate: 45, major: 45, catastrophic: 45 },
  { id: 4, name: 'very likly', score: 90, insignificant: 90, minor: 90, moderate: 90, major: 90, catastrophic: 90 },
  { id: 5, name: 'almost certain', score: 90, insignificant: 90, minor: 90, moderate: 90, major: 90, catastrophic: 90 },
];

const columns = [
  { field: 'name', headerName: 'Name', width: 150 },
  {
    field: 'insignificant',
    headerName: 'Insignificant',
    width: 150,
    renderCell: (params) => (
      <Box
        sx={{
          backgroundColor: getHeatMapColor(params.value),
          color: 'white',
        }}
      >
        {params.value}
      </Box>
    ),
  },
  {
    field: 'minor',
    headerName: 'Minor',
    width: 150,
    renderCell: (params) => (
      <Box
        sx={{
          backgroundColor: getHeatMapColor(params.value),
          color: 'white',
        }}
      >
        {params.value}
      </Box>
    ),
  },
  {
    field: 'moderate',
    headerName: 'Moderate',
    width: 150,
    renderCell: (params) => (
      <Box
        sx={{
          backgroundColor: getHeatMapColor(params.value),
          color: 'white',
        }}
      >
        {params.value}
      </Box>
    ),
  },
  {
    field: 'major',
    headerName: 'Major',
    width: 150,
    renderCell: (params) => (
      <Box
        sx={{
          backgroundColor: getHeatMapColor(params.value),
          color: 'white',
        }}
      >
        {params.value}
      </Box>
    ),
  },
  {
    field: 'catastrophic',
    headerName: 'Catastrophic',
    width: 150,
    renderCell: (params) => (
      <Box
        sx={{
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

export const HeatMapGrid = () => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={data} columns={columns} />
      sx={{
    border: 2,
    borderColor: 'primary.light',
    '& .MuiDataGrid-columnHeaders' {
      background-color: none,
    },
  }}
    </div>
  );
};



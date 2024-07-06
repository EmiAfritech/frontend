// src/HeatMapGrid.js
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';

const data = [
  { id: 1, name: 'almost in possible', score: 65 },
  { id: 2, name: 'unlikly', score: 80 },
  { id: 3, name: 'likly', score: 45 },
  { id: 4, name: 'very likly', score: 90 },
  { id: 5, name: 'almost certain', score: 90 },
  { id: 1, insignificant: 'almost in possible', score: 65 },
  { id: 2, insignificant: 'unlikly', score: 80 },
  { id: 3, insignificant: 'likly', score: 45 },
  { id: 4, insignificant: 'very likly', score: 90 },
  { id: 5, minor: 'almost certain', score: 90 },
  { id: 1, minor: 'almost in possible', score: 65 },
  { id: 2, minor: 'unlikly', score: 80 },
  { id: 3, minor: 'likly', score: 45 },
  { id: 4, minor: 'very likly', score: 90 },
  { id: 5, minor: 'almost certain', score: 90 },
  { id: 1, moderate: 'almost in possible', score: 65 },
  { id: 2, moderate: 'unlikly', score: 80 },
  { id: 3, moderate: 'likly', score: 45 },
  { id: 4, moderate: 'very likly', score: 90 },
  { id: 5, moderate: 'almost certain', score: 90 },
  { id: 1, major: 'almost in possible', score: 65 },
  { id: 2, major: 'unlikly', score: 80 },
  { id: 3, major: 'likly', score: 45 },
  { id: 4, major: 'very likly', score: 90 },
  { id: 5, major: 'almost certain', score: 90 },
  { id: 1, catastrophic: 'almost in possible', score: 65 },
  { id: 2, catastrophic: 'unlikly', score: 80 },
  { id: 3, catastrophic: 'likly', score: 45 },
  { id: 4, catastrophic: 'very likly', score: 90 },
  { id: 5, catastrophic: 'almost certain', score: 90 },
];

const columns = [
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'insignificant', headerName: 'Insignificant', width: 150 },
  { field: 'minor', headerName: 'Minor', width: 150 },
  { field: 'moderate', headerName: 'Moderate', width: 150 },
  { field: 'major', headerName: 'Major', width: 150 },
  { field: 'catastrophic', headerName: 'Catastrophic', width: 150 },
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

export const HeatMapGrid = () => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={data} columns={columns} />
    </div>
  );
};


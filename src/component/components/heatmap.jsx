// src/HeatMapGrid.js
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';

const data = [
  { id: 1, name: 'almost in possible', score: 65, insignificant: 65, minor: 65, moderate: 65, major: 65, catastrophic: 65 },
  { id: 2, name: 'unlikly', score: 80, insignificant: 80, minor: 80, moderate: 80, major: 80, catastrophic: 80 },
  { id: 3, name: 'likly', score: 45, insignificant: 45, minor: 80, moderate: 45, major: 55, catastrophic: 75 },
  { id: 4, name: 'very likly', score: 90, insignificant: 40, minor: 90, moderate: 50, major: 90, catastrophic: 90 },
  { id: 5, name: 'almost certain', score: 60, insignificant: 30, minor: 90, moderate: 70, major: 90, catastrophic: 80 },
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
           width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: getHeatMapColor(params.value),
          color: 'black',
          p: 0,
          m: 0,
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
           width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: getHeatMapColor(params.value),
          color: 'black',
          p: 0,
          m: 0,
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
           width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: getHeatMapColor(params.value),
          color: 'black',
          p: 0,
          m: 0,
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
           width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: getHeatMapColor(params.value),
          color: 'black',
          p: 0,
          m: 0,
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
           width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: getHeatMapColor(params.value),
          color: 'black',
          p: 0,
          m: 0,
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
      <DataGrid 
        rows={data} 
        columns={columns} 
        sx={{
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: 'transparent',
          },
          '& .MuiDataGrid-columnHeaderTitle': {
            color: 'black',
          },
          '& .custom-header .MuiDataGrid-columnHeaderTitle': {
            color: 'black', // change text color for the name column
          },
          '& .custom-header': {
            backgroundColor: '#ffeb3b', // change background color for the name column
          },
          '& .MuiDataGrid-cell': {
            p: 0,
            m: 0,
          },
        }}
        />
      

    </div>
  );
};



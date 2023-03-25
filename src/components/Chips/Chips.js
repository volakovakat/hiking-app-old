import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import data from '../Trips/trips.json';

export default function Chips() {
  const handleClick = () => {
    console.log('clicked');
  };

  const handleDelete = () => {
    console.info('deleted');
  };

  return (
    <Stack direction="row" spacing={1}>
      <Chip
        variant="outlined"
        label={`${Object.keys(data)[0]}`}
        onClick={handleClick}
        onDelete={handleDelete}
      />
      <Chip
        variant="outlined"
        label={`${Object.keys(data)[1]}`}
        onClick={handleClick}
        onDelete={handleDelete}
      />
    </Stack>
  );
}
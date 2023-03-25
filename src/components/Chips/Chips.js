import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';


export default function Chips({labels}) {
  const handleClick = () => {
    console.log('clicked');
  };

  const handleDelete = () => {
    console.info('deleted');
  };

  return (
    <Stack direction="row" spacing={1}>
        {labels.map(l => <Chip
            key={l}
            variant="outlined"
            label={`${l}`}
            onClick={handleClick}
            onDelete={handleDelete}
        />)}
      {/*<Chip*/}
      {/*  variant="outlined"*/}
      {/*  label={`${Object.keys(data)[0]}`}*/}
      {/*  onClick={handleClick}*/}
      {/*  onDelete={handleDelete}*/}
      {/*/>*/}
      {/*<Chip*/}
      {/*  variant="outlined"*/}
      {/*  label={`${Object.keys(data)[1]}`}*/}
      {/*  onClick={handleClick}*/}
      {/*  onDelete={handleDelete}*/}
      {/*/>*/}
    </Stack>
  );
}

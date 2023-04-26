import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import {categoryFilter, locationFilter} from "../../reducers/dataSlice";
import {useDispatch, useSelector} from "react-redux";


export default function Chips({labels}) {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.data.trips.filter);

  const handleClick = (e) => {
    console.log('clicked', e);
    dispatch(categoryFilter(e));
    dispatch(locationFilter(null));
  };

  return (
    <Stack direction="row" spacing={1}>
        {labels.map(l => <Chip
            key={l}
            variant= {l === filter ? "" : "outlined"}
            color="primary"
            label={`${l}`}
            onClick={() => handleClick(l)}
        />)}

    </Stack>
  );
}

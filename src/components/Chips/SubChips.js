import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import {useDispatch, useSelector} from "react-redux";
import {locationFilter} from "../../reducers/dataSlice";


export default function SubChips({labels}) {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.data.trips.location);

  const handleClick = (e) => {
    console.log('clicked', e);
    dispatch(locationFilter(e));
  };

  return (
    <Stack direction="row" spacing={1}>
        {labels.map(l => <Chip
            key={l}
            variant= {l === filter ? "" : "outlined"}
            label={`${l}`}
            size="small"
            onClick={() => handleClick(l)}
        />)}

    </Stack>
  );
}

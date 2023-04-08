import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from "@mui/material/Chip";
import HikingDuration from "./HikingDuration";


const TripCard = ({trip}) => {
  return (
    <Card sx={{
        width: 345,
        height: 311}}
    >
      <CardMedia
        sx={{ height: 140 }}
        image={trip.image}
        title="map"
      />
      <CardContent>
        <Typography sx={{ fontSize: 18 }} gutterBottom variant="h5" component="div">
          {trip.header}
        </Typography>
        <Chip label={`${trip.location}`} variant="outlined" color="primary" size="small" />
        {/*<Typography variant="body2" color="text.secondary" component="div">*/}
        <HikingDuration timeRange={trip.timeRange} ascent={trip.ascent} descent={trip.descent}/>

        {/*</Typography>*/}
      </CardContent>
      <CardActions>
        <Button size="small" href={trip.info}>Info</Button>
        <Button size="small" href={trip.url}>Trasa</Button>
      </CardActions>
    </Card>
  );
}
export default TripCard;

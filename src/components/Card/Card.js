import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from "@mui/material/Chip";
import HikingDuration from "./HikingDuration";


const TripCard = ({trip: {ascent, descent, header, image, info, location, hikeTimeRange, carTimeRange, url, parking}}) => {
  return (
    <Card sx={{
        width: 345,
        height: 311}}
    >
      <CardMedia
        sx={{ height: 140 }}
        image={image}
        title="map"
      />
      <CardContent>
        <Typography sx={{ fontSize: 18 }} gutterBottom variant="h5" component="div">
          {header}
        </Typography>
        <Chip label={`${location}`} variant="outlined" color="primary" size="small" />
        {/*<Typography variant="body2" color="text.secondary" component="div">*/}
        <HikingDuration hikeTimeRange={hikeTimeRange} carTimeRange={carTimeRange} ascent={ascent}/>

        {/*</Typography>*/}
      </CardContent>
      <CardActions>
        <Button size="small" href={info} target="_blank">Info</Button>
        <Button size="small" href={url} target="_blank">Trasa</Button>
        <Button size="small" href={parking} target="_blank">Parking</Button>
      </CardActions>
    </Card>
  );
}
export default TripCard;

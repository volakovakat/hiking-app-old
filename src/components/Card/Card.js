import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import data from '../Trips/trips.json';


export default function TripCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={data.tenerife.trip1.image}
        title="map"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.tenerife.trip1.header}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Časová náročnost: {data.tenerife.trip1.timeRange}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={data.tenerife.trip1.info}>Info</Button>  
        <Button size="small" href={data.tenerife.trip1.url}>Trasa</Button>
      </CardActions>
    </Card>
  );
}
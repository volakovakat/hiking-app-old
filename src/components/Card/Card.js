import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function TripCard({trip}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={trip.image}
        title="map"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {trip.header}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Časová náročnost: {trip.timeRange}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={trip.info}>Info</Button>
        <Button size="small" href={trip.url}>Trasa</Button>
      </CardActions>
    </Card>
  );
}

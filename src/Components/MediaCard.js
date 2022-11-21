import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img from '../Images/transport.jpeg'
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

export default function MediaCard(props) {
  const {data, uid} = props
  const navigate = useNavigate()
  // console.log('uid',uid)

  const navigateToBookNow = () =>{
    navigate('booknow',{state:data})
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={img}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Type:{data.transportType}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          No Of Seats:{data.noOfSeats}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Rout From:{data.routFrom} TO:{data.routTo}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Price: {data.price}</Button>
        <Button size="small"> Rout Time: {data.routTime}</Button>
      </CardActions>
      <Link to='/'>
      <Link to='booknow'>
      <Box className='mb-3' sx={{diaplay:'flex', justifyContent:'center'}}>
        <Button onClick={navigateToBookNow} variant='contained'>Book Now</Button>
      </Box>
      </Link>
      </Link>
    </Card> 
  );
}
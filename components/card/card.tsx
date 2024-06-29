import * as React from 'react';
import {Card,CardActions,CardContent,CardMedia,Button,Typography} from '@mui/material';


export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          عنوان 
        </Typography>
        <Typography variant="body2" color="text.secondary">
        توضیحات برای کارت مورد نظر
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">اشتراک</Button>
        <Button size="small">اطلاعات بیشتر</Button>
      </CardActions>
    </Card>
  );
}
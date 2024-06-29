
import MediaCard from '@/components/card/card'
import { Grid } from '@mui/material'
import React from 'react'

export default function ProductList() {
  return (
    <Grid container spacing={2}>
    {
      [...Array(6)].map((item)=>
(
  <Grid item xs={6} md={3} sm={4} lg={2} className='m-3'>
  <>
  <MediaCard/></>
    </Grid>
)
        )
      }
    
  </Grid>
  )
}
